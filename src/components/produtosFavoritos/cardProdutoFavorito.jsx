import { useCarrinho } from "../../contexts/carrinhoContext";

export default function CardProdutoFavorito({
  produtoFoto,
  produtoCategoria,
  produtoTitulo,
  produtoNumAvaliacoes,
  produtoPrecoOriginal,
  produtoPrecoAtual,
  onRemoveFavorite,
  produtoId
}) {
  const { adicionarAoCarrinho, todosProdutos } = useCarrinho();
  
  const handleAddToCart = () => {
    const produto = todosProdutos.find(p => p.id === produtoId);
    if (produto) {
        adicionarAoCarrinho(produto);
        alert(`"${produtoTitulo.replace(/\s*\(.*\)/, "")}" adicionado ao carrinho!`);
    } else {
        alert("Produto não encontrado no catálogo.");
    }
  };

  return (
    <div className="card-produto-favorito">
      <img
        src={produtoFoto}
        alt="Foto do produto"
        className="foto-produto-favorito"
      />
      <div className="segunda-coluna-card-produto-favorito">
        <div className="info-produto-favorito">
          <span>{produtoCategoria}</span>
          <h2>{produtoTitulo}</h2>
        </div>
        <div className="avaliacao-produto-favorito">
          <div className="estrelas-avaliacao-produto-favorito">
            <div className="estrela-avaliacao">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="estrela-avaliacao">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="estrela-avaliacao">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="estrela-avaliacao">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="estrela-avaliacao">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="label-total-avaliacoes">
            <p>({produtoNumAvaliacoes})</p>
          </div>
        </div>
      </div>
      <div className="divisoria-produto-favorito"></div>
      <div className="preco-produto">
        <span>{"R$" + produtoPrecoOriginal}</span>
        <h2>{"R$" + produtoPrecoAtual}</h2>
        <p>À vista no Pix</p>
      </div>
      <div className="acoes-produto-favorito">
        <i className="fa-solid fa-heart" onClick={onRemoveFavorite}></i>
        <button onClick={handleAddToCart}>
          <div className="botao-acoes-produto-favorito">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>COMPRAR</h3>
          </div>
        </button>
      </div>
    </div>
  );
}