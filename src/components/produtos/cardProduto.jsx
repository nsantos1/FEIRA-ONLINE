import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCarrinho } from "../../contexts/carrinhoContext";
import { useFavoritos } from "../favoritos/logicaFavoritos";
import "./styles.css";

export default function CardProduto({ produto }) {
  const { adicionarAoCarrinho } = useCarrinho();
  const { favoritos, favoritarItem } = useFavoritos();
  
  const isFavorited = favoritos.includes(produto.id);
  const isOutOfStock = produto.estoque === 0;

  const handleAddToCartClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    if (isOutOfStock) {
      alert("Produto esgotado!");
      return;
    }
    adicionarAoCarrinho(produto);
    alert(`"${produto.nome.replace(/\s*\(.*\)/, "")}" adicionado ao carrinho!`);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    favoritarItem(produto.id);
  };

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
          <button 
            className="add-to-cart-button"
            onClick={handleAddToCartClick}
            disabled={isOutOfStock}
          >
            <FaShoppingCart />
            <span>{isOutOfStock ? "Esgotado" : "Adicionar"}</span>
          </button>
          <button 
            className="favorite-button"
            onClick={handleFavoriteClick}
            style={{ color: isFavorited ? 'var(--cor-hover)' : 'var(--cor-secundaria-fonte)' }}
          >
            <FaHeart style={{ color: isFavorited ? 'var(--cor-hover)' : 'inherit' }} />
          </button>
        </div>
      </div>
    </Link>
  );
}