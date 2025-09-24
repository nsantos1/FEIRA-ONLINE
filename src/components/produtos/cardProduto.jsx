import { Link } from "react-router-dom";
import "./styles.css";

export default function CardProduto({ produto }) {
  return (
    <Link to={`/produto/${produto.id}`} className="product-card-link">
      <div className="product-card-container">
        <div className="product-card-image">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="product-card-info">
          <p className="product-card-category">{produto.categoria}</p>
          <h3 className="product-card-name">{produto.nome}</h3>
          <p className="product-card-store">{produto.loja}</p>
          <p className="product-card-price">
            {produto.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div className="product-card-actions">
          <button className="add-to-cart-button">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Adicionar</span>
          </button>
          <button className="favorite-button">
            <i className="fa-regular fa-heart"></i>
          </button>
          <Link to={`/avaliacoes/${produto.id}`} className="view-reviews-button">
            <span>Avaliações</span>
          </Link>
        </div>
      </div>
    </Link>
  );
}

