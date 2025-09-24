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
  confirmacaoExclusao,
  onConfirmarExclusao,
  onCancelarExclusao,
}) => (
  <div className="review-system-comments-list-container">
    {/* Modal de confirmação de exclusão */}
    {confirmacaoExclusao && (
      <div className="review-system-modal-backdrop">
        <div className="review-system-modal-content">
          <h4>Confirmar Exclusão</h4>
          <p>Tem certeza que deseja excluir este comentário?</p>
          <div className="review-system-modal-actions">
            <button onClick={onConfirmarExclusao} className="confirm-delete-button">Excluir</button>
            <button onClick={onCancelarExclusao} className="cancel-button">Cancelar</button>
          </div>
        </div>
      </div>
    )}

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
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nota || !comentario.trim()) {
      setErro("Por favor, selecione uma nota e escreva um comentário.");
      return;
    }

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
    setErro("");
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
      {erro && <p className="review-system-error-message">{erro}</p>}
      <button type="submit" className="review-system-submit-button">
        Enviar Avaliação
      </button>
    </form>
  );
});

// Componente CadastroUsuario
const CadastroUsuario = React.memo(({ onCadastrar }) => {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!nome.trim()) {
      setErro("O campo nome não pode estar vazio.");
      return;
    }
    onCadastrar({ nome, id: crypto.randomUUID() });
    setNome("");
    setErro("");
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

/* ------------------ COMPONENTE PRINCIPAL ------------------ */
const SistemaDeAvaliacao = () => {
  const { id } = useParams();
  const produtoAtual = useMemo(
    () => produtos.find((p) => p.id === parseInt(id)),
    [id]
  );

  const [usuario, setUsuario] = useState(null);

  // Adicione esta linha para obter o valor inicial das avaliações do produto
  const avaliacoesIniciais = useMemo(() => produtoAtual?.avaliacoes || [], [produtoAtual]);

  // Modifique esta linha para passar avaliacoesIniciais como valor padrão
  const [avaliacoes, setAvaliacoes] = useLocalStorage(`avaliacoes-${id}`, avaliacoesIniciais);

  // Remova o useEffect antigo, pois ele não é mais necessário

  const media = useMemo(
    () =>
      avaliacoes.length === 0
        ? 0
        : avaliacoes.reduce((acc, curr) => acc + curr.nota, 0) / avaliacoes.length,
    [avaliacoes]
  );

  const [ordem, setOrdem] = useState("recentes");
  const [filtroEstrelas, setFiltroEstrelas] = useState(0);

  // Novo estado para o modal de exclusão
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState(null);

  const avaliacoesOrdenadas = useMemo(() => {
    // Adição do filtro de estrelas na lista de avaliações
    const filtradas = avaliacoes.filter(a => filtroEstrelas === 0 || a.nota === filtroEstrelas);

    const sorted = [...filtradas].sort((a, b) => {
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
  }, [avaliacoes, ordem, filtroEstrelas]);

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

  // Função que abre o modal de confirmação
  const iniciarExclusao = useCallback((avaliacaoId) => {
    setConfirmacaoExclusao(avaliacaoId);
  }, []);

  // Função para confirmar a exclusão
  const confirmarExclusao = useCallback(() => {
    setAvaliacoes((prev) => prev.filter((a) => a.id !== confirmacaoExclusao));
    setConfirmacaoExclusao(null);
  }, [confirmacaoExclusao, setAvaliacoes]);

  // Função para cancelar a exclusão
  const cancelarExclusao = useCallback(() => {
    setConfirmacaoExclusao(null);
  }, []);

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
          <h1 className="review-system-product-title">{produtoAtual?.nome || "Produto"}</h1>
          <p className="review-system-product-subtitle">
            Deixe sua opinião sobre nosso produto e veja o que outros clientes
            acharam.
          </p>
          <div className="review-system-divider" data-texto="Resumo das Avaliações"></div>
          <div className="review-system-summary">
            <div className="review-system-general-rating">
              <h2>Avaliação Geral</h2>
              <div className="review-system-score">{media.toFixed(1)}</div>
              <ExibicaoEstrelas media={media} />
              <p>Baseado em {avaliacoes.length} avaliações</p>
            </div>
            <BarrasAvaliacao avaliacoes={avaliacoes} />
          </div>

          <div className="review-system-divider" data-texto="Sua Avaliação"></div>
          {!usuario ? (
            <CadastroUsuario onCadastrar={cadastrarUsuario} />
          ) : (
            <FormularioAvaliacao
              usuario={usuario}
              onAdicionar={adicionarAvaliacao}
            />
          )}

          <div className="review-system-divider" data-texto="Comentários dos Clientes"></div>
          <div className="review-system-comments-filters">
            <label>Filtrar por Nota: </label>
            <select
              value={filtroEstrelas}
              onChange={(e) => setFiltroEstrelas(parseInt(e.target.value))}
            >
              <option value={0}>Todas as notas</option>
              <option value={5}>5 estrelas</option>
              <option value={4}>4 estrelas</option>
              <option value={3}>3 estrelas</option>
              <option value={2}>2 estrelas</option>
              <option value={1}>1 estrela</option>
            </select>
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
      </main>
      <Footer />
    </div>
  );
};

export default SistemaDeAvaliacao;