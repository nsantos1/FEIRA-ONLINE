import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaThumbsUp,
  FaThumbsDown,
  FaFlag,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

// O PRODUTO SERÁ PASSADO VIA PROPS AGORA, NÃO MAIS POR PARAMS DA URL
// O CSS é importado do style.css original do sistema de avaliação
import "../../pages/sistemadeavaliacao/style.css";

/* ------------------ HELPERS ------------------ */

const safeParse = (s, fallback) => {
  try {
    return JSON.parse(s);
  } catch {
    return fallback;
  }
};

const genId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

/* ------------------ useLocalStorage (robusto) ------------------ */

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      const parsed = raw != null ? safeParse(raw, initialValue) : initialValue;

      // Normalize structure if array of objects expected
      if (Array.isArray(parsed)) {
        return parsed.map((a) => ({
          ...a,
          curtidasPor: Array.isArray(a.curtidasPor) ? a.curtidasPor : [],
          descurtidasPor: Array.isArray(a.descurtidasPor) ? a.descurtidasPor : [],
          likes: typeof a.likes === "number" ? a.likes : 0,
          unlikes: typeof a.unlikes === "number" ? a.unlikes : 0,
          reports: typeof a.reports === "number" ? a.reports : 0,
        }));
      }

      return parsed;
    } catch (e) {
      console.error("Erro ao carregar localStorage", e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Erro ao salvar localStorage", e);
    }
  }, [key, value]);

  return [value, setValue];
}

/* ------------------ useUsuario ------------------ */

function useUsuario() {
  const [usuario, setUsuario] = useLocalStorage("current_user", null);

  const cadastrar = useCallback(
    (nome) => {
      if (!nome || !nome.trim()) return false;
      setUsuario({ nome: nome.trim(), id: genId() });
      return true;
    },
    [setUsuario]
  );

  const logout = useCallback(() => setUsuario(null), [setUsuario]);

  return { usuario, cadastrar, logout };
}

/* ------------------ Subcomponents ------------------ */

const ExibicaoEstrelas = React.memo(({ media = 0 }) => {
  const cheias = Math.floor(media);
  const meia = media % 1 !== 0;

  return (
    <div className="review-system-stars-container">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= cheias ? (
          <FaStar key={i} className="review-system-star" />
        ) : i === cheias + 1 && meia ? (
          <FaStarHalfAlt key={i} className="review-system-star review-system-half-star" />
        ) : (
          <FaStar key={i} className="review-system-empty-star" />
        )
      )}
    </div>
  );
});

const BarrasAvaliacao = React.memo(({ avaliacoes = [] }) => {
  const total = avaliacoes.length;
  const contagem = useMemo(() => {
    return avaliacoes.reduce(
      (acc, a) => {
        const nota = Math.floor(a.nota) || 0;
        if (nota >= 1 && nota <= 5) acc[nota] = (acc[nota] || 0) + 1;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    );
  }, [avaliacoes]);

  return (
    <div className="review-system-rating-bars-container">
      {[5, 4, 3, 2, 1].map((nota) => {
        const num = contagem[nota] || 0;
        const pct = total > 0 ? (num / total) * 100 : 0;
        return (
          <div className="review-system-rating-bar" key={nota}>
            <span className="review-system-bar-label">
              {nota} estrela{nota > 1 ? "s" : ""}
            </span>
            <div className="review-system-bar-track">
              <div className="review-system-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="review-system-bar-value">{pct.toFixed(0)}%</span>
          </div>
        );
      })}
    </div>
  );
});

const ModalConfirmacao = React.memo(({ onConfirmar, onCancelar }) => (
  <div className="modal-confirmacao" role="dialog" aria-modal="true">
    <div className="modal-confirmacao-conteudo">
      <h4>Confirmar Exclusão</h4>
      <p>Tem certeza que deseja excluir este comentário?</p>
      <div className="modal-confirmacao-botoes">
        <button onClick={onConfirmar} className="excluir">
          Excluir
        </button>
        <button onClick={onCancelar} className="cancelar">
          Cancelar
        </button>
      </div>
    </div>
  </div>
));

const ListaComentarios = React.memo((props) => {
  const {
    comentarios = [],
    onCurtir,
    onDescurtir,
    onDenunciar,
    onEditar,
    onExcluir,
    usuario,
    editandoId,
    comentarioEditado,
    onComentarioEditadoChange,
    onSalvarEdicao,
    onCancelarEdicao,
    confirmacaoExclusao,
    onConfirmarExclusao,
    onCancelarExclusao,
  } = props;

  return (
    <div className="review-system-comments-list-container">
      {confirmacaoExclusao && (
        <ModalConfirmacao onConfirmar={onConfirmarExclusao} onCancelar={onCancelarExclusao} />
      )}

      {comentarios.length === 0 ? (
        <p className="review-system-no-comments">Ainda não há comentários para este produto.</p>
      ) : (
        <ul className="review-system-comments-list">
          {comentarios.map((c) => {
            const isUser = usuario?.id === c.usuarioId;
            const hasLiked = usuario && c.curtidasPor?.includes(usuario.id);
            const hasDisliked = usuario && c.descurtidasPor?.includes(usuario.id);

            return (
              <li key={c.id} className={`review-system-comment-item ${isUser ? "is-user-comment" : ""}`}>
                <div className="review-system-comment-header">
                  <div className="review-system-user-info">
                    <div className="review-system-user-avatar">{c.nome?.[0]?.toUpperCase() || "U"}</div>
                    <div className="review-system-user-meta">
                      <span className="review-system-user-name">{c.nome || "Usuário Anônimo"}</span>
                      <span className="review-system-comment-date">{c.data}</span>
                    </div>
                  </div>
                  <div className="review-system-comment-rating">
                    <ExibicaoEstrelas media={c.nota} />
                  </div>
                </div>

                <div className="review-system-comment-content">
                  {editandoId === c.id ? (
                    <>
                      <textarea
                        value={comentarioEditado}
                        onChange={(e) => onComentarioEditadoChange(e.target.value)}
                        className="review-system-edit-comment-input"
                        rows="4"
                      />
                      <div className="review-system-edit-actions">
                        <button onClick={() => onSalvarEdicao(c.id)} disabled={!comentarioEditado.trim()}>
                          Salvar
                        </button>
                        <button onClick={onCancelarEdicao}>Cancelar</button>
                      </div>
                    </>
                  ) : (
                    <p>"{c.comentario}"</p>
                  )}
                </div>

                <div className="review-system-comment-actions">
                  <button
                    onClick={() => usuario && onCurtir(c.id, usuario.id)}
                    disabled={!usuario}
                    className={`review-system-like-button ${hasLiked ? "active" : ""}`}
                    aria-pressed={hasLiked}
                  >
                    <FaThumbsUp /> {c.likes}
                  </button>

                  <button
                    onClick={() => usuario && onDescurtir(c.id, usuario.id)}
                    disabled={!usuario}
                    className={`review-system-dislike-button ${hasDisliked ? "active" : ""}`}
                    aria-pressed={hasDisliked}
                  >
                    <FaThumbsDown /> {c.unlikes}
                  </button>

                  <button onClick={() => onDenunciar(c.id)} className="review-system-report-button">
                    <FaFlag /> Denunciar
                  </button>

                  {isUser && (
                    <>
                      <button onClick={() => onEditar(c.id)} className="review-system-edit-button">
                        <FaEdit /> Editar
                      </button>
                      <button onClick={() => onExcluir(c.id)} className="review-system-delete-button">
                        <FaTrash /> Excluir
                      </button>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});

const FormularioAvaliacao = React.memo(({ usuario, onAdicionar }) => {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nota || !comentario.trim()) {
      setErro("Por favor, selecione uma nota e escreva um comentário.");
      setEnviado(false);
      return;
    }

    if (nota < 1 || nota > 5) {
      setErro("Nota inválida.");
      return;
    }

    onAdicionar({
      id: genId(),
      nome: usuario.nome,
      usuarioId: usuario.id,
      nota,
      comentario: comentario.trim(),
      data: new Date().toLocaleDateString("pt-BR"),
      likes: 0,
      unlikes: 0,
      reports: 0,
      curtidasPor: [],
      descurtidasPor: [],
    });

    setNota(0);
    setComentario("");
    setErro("");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  if (enviado) {
    return (
      <div className="review-system-form review-system-success-message">
        <h4>✅ Avaliação enviada com sucesso!</h4>
        <p>Obrigado por sua opinião.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="review-system-form">
      <h4>Avalie este produto</h4>
      <div className="review-system-star-selection" role="radiogroup" aria-label="Nota">
        {[1, 2, 3, 4, 5].map((n) => (
          <FaStar
            key={n}
            className={`review-system-star-icon ${n <= nota ? "ativo" : ""}`}
            onClick={() => setNota(n)}
            role="radio"
            aria-checked={n === nota}
          />
        ))}
        <span className="review-system-score-text">{nota} Estrela{nota > 1 ? "s" : ""}</span>
      </div>

      <textarea
        placeholder="Escreva sua opinião..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        className="review-system-comment-input"
        rows="4"
      />
      {erro && <p className="review-system-error-message">{erro}</p>}
      <button type="submit" className="review-system-submit-button">
        Enviar Avaliação
      </button>
    </form>
  );
});

const CadastroUsuario = React.memo(({ onCadastrar }) => {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const sucesso = onCadastrar(nome);
      if (!sucesso) {
        setErro("O campo nome não pode estar vazio.");
      } else {
        setNome("");
        setErro("");
      }
    },
    [nome, onCadastrar]
  );

  return (
    <form onSubmit={handleSubmit} className="review-system-form">
      <h4>Cadastre-se para avaliar</h4>
      <div className="review-system-form-group">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="review-system-name-input"
        />
        <button type="submit" className="review-system-submit-button">
          Entrar
        </button>
      </div>
      {erro && <p className="review-system-error-message">{erro}</p>}
    </form>
  );
});

/* ------------------ Componente Principal Reutilizável ------------------ */

export default function ReviewSection({ produto }) {
  const avaliacoesIniciais = useMemo(
    () => {
        return (produto?.avaliacoes || []).map((a) => ({
            ...a,
            curtidasPor: Array.isArray(a.curtidasPor) ? a.curtidasPor : [],
            descurtidasPor: Array.isArray(a.descurtidasPor) ? a.descurtidasPor : [],
            likes: typeof a.likes === "number" ? a.likes : 0,
            unlikes: typeof a.unlikes === "number" ? a.unlikes : 0,
            reports: typeof a.reports === "number" ? a.reports : 0,
            usuarioId: a.usuarioId || a.nome || null,
            id: a.id || genId(),
        }));
    },
    [produto]
  );
  
  // Usa o id do produto para o localStorage
  const reviewStorageKey = `avaliacoes-${produto.id}`;
  const [avaliacoes, setAvaliacoes] = useLocalStorage(reviewStorageKey, avaliacoesIniciais);


  // Sincroniza o estado inicial do localStorage com as avaliações do produto (caso não existam)
  useEffect(() => {
    // Isso garante que se o localStorage estiver vazio, ele use as avaliações mockadas
    if (localStorage.getItem(reviewStorageKey) === null) {
      setAvaliacoes(avaliacoesIniciais);
    }
  }, [produto.id, avaliacoesIniciais, setAvaliacoes, reviewStorageKey]);
  
  const { usuario, cadastrar } = useUsuario();

  const media = useMemo(() => {
    if (!avaliacoes || avaliacoes.length === 0) return 0;
    const soma = avaliacoes.reduce((acc, a) => acc + (Number(a.nota) || 0), 0);
    return soma / avaliacoes.length;
  }, [avaliacoes]);

  const [ordem, setOrdem] = useState("recentes");
  const [filtroEstrelas, setFiltroEstrelas] = useState(0);
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState(null);
  const [editandoId, setEditandoId] = useState(null);
  const [comentarioEditado, setComentarioEditado] = useState("");

  const avaliacoesOrdenadas = useMemo(() => {
    const filtradas = (avaliacoes || []).filter((a) => filtroEstrelas === 0 || Math.floor(a.nota) === filtroEstrelas);

    const sorted = [...filtradas].sort((a, b) => {
      if (ordem === "recentes") {
        const da = a.data ? a.data.split("/").reverse().join("-") : "";
        const db = b.data ? b.data.split("/").reverse().join("-") : "";
        return new Date(db) - new Date(da);
      }
      if (ordem === "antigas") {
        const da = a.data ? a.data.split("/").reverse().join("-") : "";
        const db = b.data ? b.data.split("/").reverse().join("-") : "";
        return new Date(da) - new Date(db);
      }
      if (ordem === "melhores") return (b.nota || 0) - (a.nota || 0);
      return 0;
    });

    return sorted;
  }, [avaliacoes, ordem, filtroEstrelas]);

  const adicionarAvaliacao = useCallback(
    (nova) => {
      setAvaliacoes((prev = []) => [nova, ...prev]);
    },
    [setAvaliacoes]
  );

  const curtir = useCallback(
    (avaliacaoId, usuarioId) => {
      if (!usuarioId) return;
      setAvaliacoes((prev = []) =>
        prev.map((a) => {
          if (a.id !== avaliacaoId) return a;

          const jaCurtiu = (a.curtidasPor || []).includes(usuarioId);
          const jaDescurtiu = (a.descurtidasPor || []).includes(usuarioId);

          if (jaCurtiu) {
            // desfazer curtida
            return {
              ...a,
              likes: Math.max(0, (a.likes || 0) - 1),
              curtidasPor: (a.curtidasPor || []).filter((x) => x !== usuarioId),
            };
          }

          let newLikes = (a.likes || 0) + 1;
          let newUnlikes = a.unlikes || 0;
          let newCurtidasPor = [...(a.curtidasPor || []), usuarioId];
          let newDescurtidasPor = [...(a.descurtidasPor || [])];

          if (jaDescurtiu) {
            newDescurtidasPor = newDescurtidasPor.filter((x) => x !== usuarioId);
            newUnlikes = Math.max(0, newUnlikes - 1);
          }

          return {
            ...a,
            likes: newLikes,
            unlikes: newUnlikes,
            curtidasPor: newCurtidasPor,
            descurtidasPor: newDescurtidasPor,
          };
        })
      );
    },
    [setAvaliacoes]
  );

  const descurtir = useCallback(
    (avaliacaoId, usuarioId) => {
      if (!usuarioId) return;
      setAvaliacoes((prev = []) =>
        prev.map((a) => {
          if (a.id !== avaliacaoId) return a;

          const jaCurtiu = (a.curtidasPor || []).includes(usuarioId);
          const jaDescurtiu = (a.descurtidasPor || []).includes(usuarioId);

          if (jaDescurtiu) {
            // desfazer descurtida
            return {
              ...a,
              unlikes: Math.max(0, (a.unlikes || 0) - 1),
              descurtidasPor: (a.descurtidasPor || []).filter((x) => x !== usuarioId),
            };
          }

          let newUnlikes = (a.unlikes || 0) + 1;
          let newLikes = a.likes || 0;
          let newDescurtidasPor = [...(a.descurtidasPor || []), usuarioId];
          let newCurtidasPor = [...(a.curtidasPor || [])];

          if (jaCurtiu) {
            newCurtidasPor = newCurtidasPor.filter((x) => x !== usuarioId);
            newLikes = Math.max(0, newLikes - 1);
          }

          return {
            ...a,
            likes: newLikes,
            unlikes: newUnlikes,
            curtidasPor: newCurtidasPor,
            descurtidasPor: newDescurtidasPor,
          };
        })
      );
    },
    [setAvaliacoes]
  );

  const denunciar = useCallback(
    (avaliacaoId) => {
      setAvaliacoes((prev = []) => prev.map((a) => (a.id === avaliacaoId ? { ...a, reports: (a.reports || 0) + 1 } : a)));
    },
    [setAvaliacoes]
  );

  const iniciarExclusao = useCallback((avaliacaoId) => setConfirmacaoExclusao(avaliacaoId), []);
  const confirmarExclusao = useCallback(() => {
    setAvaliacoes((prev = []) => prev.filter((a) => a.id !== confirmacaoExclusao));
    setConfirmacaoExclusao(null);
  }, [confirmacaoExclusao, setAvaliacoes]);
  const cancelarExclusao = useCallback(() => setConfirmacaoExclusao(null), []);

  const iniciarEdicao = useCallback(
    (id) => {
      const comentario = (avaliacoes || []).find((a) => a.id === id)?.comentario;
      if (comentario !== undefined) {
        setEditandoId(id);
        setComentarioEditado(comentario);
      }
    },
    [avaliacoes]
  );

  const salvarEdicao = useCallback(
    (id) => {
      if (!comentarioEditado.trim()) return;
      setAvaliacoes((prev = []) => prev.map((a) => (a.id === id ? { ...a, comentario: comentarioEditado } : a)));
      setEditandoId(null);
      setComentarioEditado("");
    },
    [comentarioEditado, setAvaliacoes]
  );

  const cancelarEdicao = useCallback(() => {
    setEditandoId(null);
    setComentarioEditado("");
  }, []);

  return (
    <div className="review-system-container">
      <div className="review-system-divider" data-texto="Resumo das Avaliações" />

      <div className="review-system-summary">
        <div className="review-system-general-rating">
          <h2>Avaliação Geral</h2>
          <div className="review-system-score">{isNaN(media) ? "0.0" : media.toFixed(1)}</div>
          <ExibicaoEstrelas media={media} />
          <p>Baseado em {avaliacoes?.length || 0} avaliações</p>
        </div>

        <BarrasAvaliacao avaliacoes={avaliacoes} />
      </div>

      <div className="review-system-divider" data-texto="Sua Avaliação" />

      {!usuario ? <CadastroUsuario onCadastrar={cadastrar} /> : <FormularioAvaliacao usuario={usuario} onAdicionar={adicionarAvaliacao} />}

      <div className="review-system-divider" data-texto="Comentários dos Clientes" />

      <div className="review-system-comments-filters">
        <label>Filtrar por Nota: </label>
        <select value={filtroEstrelas} onChange={(e) => setFiltroEstrelas(parseInt(e.target.value || "0", 10))}>
          <option value={0}>Todas as notas</option>
          <option value={5}>5 estrelas</option>
          <option value={4}>4 estrelas</option>
          <option value={3}>3 estrelas</option>
          <option value={2}>2 estrelas</option>
          <option value={1}>1 estrela</option>
        </select>

        <label>Ordenar por: </label>
        <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
          <option value="recentes">Mais recentes</option>
          <option value="antigas">Mais antigas</option>
          <option value="melhores">Melhor avaliados</option>
        </select>
      </div>

      <ListaComentarios
        comentarios={avaliacoesOrdenadas}
        onCurtir={curtir}
        onDescurtir={descurtir}
        onDenunciar={denunciar}
        onEditar={iniciarEdicao}
        onExcluir={iniciarExclusao}
        usuario={usuario}
        editandoId={editandoId}
        comentarioEditado={comentarioEditado}
        onComentarioEditadoChange={setComentarioEditado}
        onSalvarEdicao={salvarEdicao}
        onCancelarEdicao={cancelarEdicao}
        confirmacaoExclusao={confirmacaoExclusao}
        onConfirmarExclusao={confirmarExclusao}
        onCancelarExclusao={cancelarExclusao}
      />
    </div>
  );
}