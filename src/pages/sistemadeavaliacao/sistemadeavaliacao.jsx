import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaThumbsUp,
  FaThumbsDown,
  FaFlag,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import produtos from "../../data/produtos.js";
import "./style.css";

/* ------------------ HOOK: LocalStorage ------------------ */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
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

/* ------------------ COMPONENTES REUTILIZÁVEIS ------------------ */

// Componente ExibicaoEstrelas
const ExibicaoEstrelas = React.memo(({ media }) => {
  const estrelasCheias = Math.floor(media);
  const temMeiaEstrela = media % 1 !== 0;

  return (
    <div className="review-system-stars-container">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= estrelasCheias ? (
          <FaStar key={i} className="review-system-star" />
        ) : i === estrelasCheias + 1 && temMeiaEstrela ? (
          <FaStarHalfAlt key={i} className="review-system-star" />
        ) : (
          <FaStar key={i} className="review-system-empty-star" />
        )
      )}
    </div>
  );
});

// Componente BarrasAvaliacao
const BarrasAvaliacao = React.memo(({ avaliacoes }) => {
  const total = avaliacoes.length;
  const contagem = useMemo(
    () =>
      avaliacoes.reduce(
        (acc, a) => ({ ...acc, [a.nota]: acc[a.nota] + 1 }),
        { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      ),
    [avaliacoes]
  );

  return (
    <div className="review-system-rating-bars-container">
      {[5, 4, 3, 2, 1].map((nota) => {
        const porcentagem = total > 0 ? (contagem[nota] / total) * 100 : 0;
        return (
          <div className="review-system-rating-bar" key={nota}>
            <span className="review-system-bar-label">
              {nota} estrela{nota > 1 ? "s" : ""}
            </span>
            <div className="review-system-bar-track">
              <div
                className="review-system-bar-fill"
                style={{ width: `${porcentagem}%` }}
              />
            </div>
            <span className="review-system-bar-value">
              {porcentagem.toFixed(0)}%
            </span>
          </div>
        );
      })}
    </div>
  );
});

// Componente ListaComentarios
const ListaComentarios = React.memo(({
  comentarios,
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
}) => (
  <div className="review-system-comments-list-container">
    {comentarios.length === 0 ? (
      <p>Ainda não há comentários para este produto.</p>
    ) : (
      <ul className="review-system-comments-list">
        {comentarios.map((c) => (
          <li key={c.id} className="review-system-comment-item">
            <div className="review-system-comment-header">
              <div className="review-system-user-info">
                <div className="review-system-user-avatar">
                  {c.nome?.[0]?.toUpperCase() || "U"}
                </div>
                <div className="review-system-user-meta">
                  <span className="review-system-user-name">
                    {c.nome || "Usuário Anônimo"}
                  </span>
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
              <button onClick={() => onCurtir(c.id)}>
                <FaThumbsUp /> {c.likes}
              </button>
              <button onClick={() => onDescurtir(c.id)}>
                <FaThumbsDown /> {c.unlikes}
              </button>
              <button onClick={() => onDenunciar(c.id)}>
                <FaFlag /> Denunciar
              </button>
              {usuario?.nome === c.nome && (
                <>
                  <button onClick={() => onEditar(c.id)}>
                    <FaEdit /> Editar
                  </button>
                  <button onClick={() => onExcluir(c.id)}>
                    <FaTrash /> Excluir
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
));

// Componente FormularioAvaliacao
const FormularioAvaliacao = React.memo(({ usuario, onAdicionar }) => {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nota || !comentario.trim()) return;

    onAdicionar({
      id: crypto.randomUUID(),
      nome: usuario.nome,
      usuarioId: usuario.id,
      nota,
      comentario,
      data: new Date().toLocaleDateString("pt-BR"),
      likes: 0,
      unlikes: 0,
      reports: 0,
    });

    setNota(0);
    setComentario("");
  };

  return (
    <form onSubmit={handleSubmit} className="review-system-form">
      <h4>Avalie este produto</h4>
      <div className="review-system-star-selection">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`review-system-star-icon ${i < nota ? "ativo" : ""}`}
            onClick={() => setNota(i + 1)}
          />
        ))}
        <span className="review-system-score-text">
          {nota} Estrela{nota > 1 ? "s" : ""}
        </span>
      </div>
      <textarea
        placeholder="Escreva sua opinião..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        className="review-system-comment-input"
        rows="4"
      />
      <button type="submit" className="review-system-submit-button">
        Enviar Avaliação
      </button>
    </form>
  );
});

// Componente CadastroUsuario
const CadastroUsuario = React.memo(({ onCadastrar }) => {
  const [nome, setNome] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!nome.trim()) return;
    onCadastrar({ nome, id: crypto.randomUUID() });
    setNome("");
  }, [nome, onCadastrar]);

  return (
    <form onSubmit={handleSubmit} className="review-system-form">
      <h4>Cadastre-se para avaliar</h4>
      <div className="review-system-form-group">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit" className="review-system-submit-button">
          Entrar
        </button>
      </div>
    </form>
  );
});

/* ------------------ COMPONENTE PRINCIPAL ------------------ */
const SistemaDeAvaliacao = () => {
  const { id } = useParams();
  const produtoAtual = useMemo(
    () => produtos.find((p) => p.id === parseInt(id)),
    [id]
  );

  const [usuario, setUsuario] = useState(null);
  const [avaliacoes, setAvaliacoes] = useLocalStorage(`avaliacoes-${id}`, []);
  const [ordem, setOrdem] = useState("recentes");

  useEffect(() => {
    if (produtoAtual && produtoAtual.avaliacoes && avaliacoes.length === 0) {
      setAvaliacoes(produtoAtual.avaliacoes);
    }
  }, [produtoAtual, avaliacoes, setAvaliacoes]);

  const media = useMemo(
    () =>
      avaliacoes.length === 0
        ? 0
        : avaliacoes.reduce((acc, curr) => acc + curr.nota, 0) / avaliacoes.length,
    [avaliacoes]
  );

  const avaliacoesOrdenadas = useMemo(() => {
    const sorted = [...avaliacoes].sort((a, b) => {
      if (ordem === "recentes") {
        const dataA = a.data.split('/').reverse().join('-');
        const dataB = b.data.split('/').reverse().join('-');
        return new Date(dataB) - new Date(dataA);
      }
      if (ordem === "antigas") {
        const dataA = a.data.split('/').reverse().join('-');
        const dataB = b.data.split('/').reverse().join('-');
        return new Date(dataA) - new Date(dataB);
      }
      if (ordem === "melhores") return b.nota - a.nota;
      return 0;
    });
    return sorted;
  }, [avaliacoes, ordem]);

  const adicionarAvaliacao = useCallback(
    (nova) => setAvaliacoes((prev) => [nova, ...prev]),
    [setAvaliacoes]
  );
  const curtir = useCallback(
    (avaliacaoId) =>
      setAvaliacoes((prev) =>
        prev.map((a) =>
          a.id === avaliacaoId ? { ...a, likes: a.likes + 1 } : a
        )
      ),
    [setAvaliacoes]
  );
  const descurtir = useCallback(
    (avaliacaoId) =>
      setAvaliacoes((prev) =>
        prev.map((a) =>
          a.id === avaliacaoId ? { ...a, unlikes: a.unlikes + 1 } : a
        )
      ),
    [setAvaliacoes]
  );
  const denunciar = useCallback(
    (avaliacaoId) =>
      setAvaliacoes((prev) =>
        prev.map((a) =>
          a.id === avaliacaoId ? { ...a, reports: a.reports + 1 } : a
        )
      ),
    [setAvaliacoes]
  );
  const excluir = useCallback(
    (avaliacaoId) =>
      setAvaliacoes((prev) => prev.filter((a) => a.id !== avaliacaoId)),
    [setAvaliacoes]
  );
  const cadastrarUsuario = useCallback((novoUsuario) => setUsuario(novoUsuario), [setUsuario]);
  const logout = useCallback(() => setUsuario(null), [setUsuario]);

  const [editandoId, setEditandoId] = useState(null);
  const [comentarioEditado, setComentarioEditado] = useState("");

  const iniciarEdicao = useCallback(
    (id) => {
      const comentario = avaliacoes.find((a) => a.id === id)?.comentario;
      if (comentario) {
        setEditandoId(id);
        setComentarioEditado(comentario);
      }
    },
    [avaliacoes]
  );

  const salvarEdicao = useCallback(
    (id) => {
      if (!comentarioEditado.trim()) return;
      setAvaliacoes((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, comentario: comentarioEditado } : a
        )
      );
      setEditandoId(null);
      setComentarioEditado("");
    },
    [comentarioEditado, setAvaliacoes]
  );

  const cancelarEdicao = useCallback(() => {
    setEditandoId(null);
    setComentarioEditado("");
  }, []);

  if (!produtoAtual) {
    return (
      <div className="review-system-app-wrapper">
        <Header usuario={usuario} logout={logout} />
        <main className="review-system-main-content">
          <div className="review-system-container">
            <h1>Produto não encontrado</h1>
            <p>O produto que você está tentando acessar não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="review-system-app-wrapper">
      <Header usuario={usuario} logout={logout} />
      <main className="review-system-main-content">
        <div className="review-system-container">
          <h1>{produtoAtual?.nome || "Produto"}</h1>
          <p>
            Deixe sua opinião sobre nosso produto e veja o que outros clientes
            acharam.
          </p>
          <div className="review-system-divider"></div>
          <div className="review-system-summary">
            <div className="review-system-general-rating">
              <h2>Avaliação Geral</h2>
              <div className="review-system-score">{media.toFixed(1)}</div>
              <ExibicaoEstrelas media={media} />
              <p>Baseado em {avaliacoes.length} avaliações</p>
            </div>
            <BarrasAvaliacao avaliacoes={avaliacoes} />
          </div>

          <div className="review-system-divider"></div>
          {!usuario ? (
            <CadastroUsuario onCadastrar={cadastrarUsuario} />
          ) : (
            <FormularioAvaliacao
              usuario={usuario}
              onAdicionar={adicionarAvaliacao}
            />
          )}

          <div className="review-system-divider"></div>
          <div className="review-system-comments-filters">
            <label>Ordenar por: </label>
            <select
              value={ordem}
              onChange={(e) => setOrdem(e.target.value)}
            >
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
            onExcluir={excluir}
            usuario={usuario}
            editandoId={editandoId}
            comentarioEditado={comentarioEditado}
            onComentarioEditadoChange={setComentarioEditado}
            onSalvarEdicao={salvarEdicao}
            onCancelarEdicao={cancelarEdicao}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SistemaDeAvaliacao;