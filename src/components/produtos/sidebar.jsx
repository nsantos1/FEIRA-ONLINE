import React from "react";
import "./styles.css";

// Lista de categorias - a mesma do header.
const categorias = [
  "Frutas e Verduras",
  "Bebê e Gravidez",
  "Bebidas",
  "Carnes e Frutos do Mar",
  "Biscoitos e Snacks",
  "Pães e Padaria",
  "Café da Manhã e Laticínios",
  "Congelados",
  "Mercearia e Básicos",
  "Saúde",
  "Produtos para o Lar",
];

// Componente da barra lateral para filtros.
// Recebe as props da página principal para controlar o estado.
export default function Sidebar({
  setCategoriaSelecionada,
  categoriaAtiva,
  precoMin,
  setPrecoMin,
  precoMax,
  setPrecoMax,
  limparFiltros,
}) {
  // Função para lidar com o clique em uma categoria.
  const handleCategoriaClick = (categoria) => {
    // Se a categoria clicada já for a ativa, desativa o filtro.
    // Caso contrário, ativa o filtro para a categoria clicada.
    if (categoriaAtiva === categoria) {
      setCategoriaSelecionada(null);
    } else {
      setCategoriaSelecionada(categoria);
    }
  };

  return (
    <aside className="products-sidebar">
      <div className="filter-section">
        <div className="filter-title-wrapper">
          <h3 className="filter-title">Categorias</h3>
          {/* Botão para limpar o filtro de categoria */}
          {categoriaAtiva && (
            <button
              onClick={() => setCategoriaSelecionada(null)}
              className="clear-filter-button"
            >
              Limpar
            </button>
          )}
        </div>
        <ul className="filter-list">
          {categorias.map((categoria, index) => (
            <li key={index} className="filter-list-item">
              <a
                href="#"
                // Adiciona a classe 'active' se a categoria estiver selecionada
                className={categoriaAtiva === categoria ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault(); // Impede a página de recarregar
                  handleCategoriaClick(categoria);
                }}
              >
                {categoria}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Faixa de Preço</h3>
        <div className="price-filter-inputs">
          <input
            type="number"
            placeholder="Mínimo (R$)"
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Máximo (R$)"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
          />
        </div>
      </div>

      <button onClick={limparFiltros} className="clear-all-filters-button">
        Limpar Todos os Filtros
      </button>
    </aside>
  );
}