import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import produtos from "../../data/produtos";
import { useFavoritos } from "../../components/favoritos/logicaFavoritos";
import { useCarrinho } from "../../contexts/carrinhoContext"; 
import ReviewSection from "../../components/reviewSection/reviewSection"; // Importado o novo componente
import "./styles.css";

export default function DetalhesDoProduto() {
  const { id } = useParams();
  const { favoritos, favoritarItem } = useFavoritos();
  const { adicionarAoCarrinho } = useCarrinho(); 
  
  const [showReviews, setShowReviews] = useState(false); // Estado para exibir/ocultar avaliações

  const produto = useMemo(() => {
    return produtos.find((p) => String(p.id) === String(id));
  }, [id]);

  if (!produto) {
    return (
      <>
        <Header />
        <main className="product-detail-page">
          <div className="product-detail-container">
            <h1>Produto não encontrado</h1>
            <p>O produto com o ID {id} não está disponível.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const isFavorited = favoritos.includes(produto.id);

  const handleAddToCart = () => {
    adicionarAoCarrinho(produto);
    alert(`"${produto.nome.replace(/\s*\(.*\)/, "")}" adicionado ao carrinho!`);
  };

  const handleToggleFavorite = () => {
    favoritarItem(produto.id);
  };
  
  const handleToggleReviews = () => {
      setShowReviews(prev => !prev);
  }

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <Header />
      <main className="product-detail-page">
        <div className="product-detail-container">
          <div className="detail-image-section">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="detail-image"
            />
          </div>
          <div className="detail-info-section">
            <p className="detail-category">{produto.categoria}</p>
            <h1 className="detail-name">{produto.nome.replace(/\s*\(.*\)/, "")}</h1>
            <p className="detail-store">Vendido por: <Link to={`/vendedor/1`}><strong>{produto.loja}</strong></Link></p> 

            <p className="detail-price">{precoFormatado}</p>

            <div className="detail-actions">
              <button className="detail-add-to-cart" onClick={handleAddToCart}>
                <FaShoppingCart /> Adicionar ao Carrinho
              </button>
              <button
                className={`detail-favorite-button ${isFavorited ? "favorited" : ""}`}
                onClick={handleToggleFavorite}
              >
                <FaHeart /> {isFavorited ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
              </button>
            </div>
            

            <h3 className="detail-description-title" style={{ marginTop: '3rem' }}>
              Descrição do Produto
            </h3>
            <p className="detail-description-text">{produto.descricao}</p>
            
            {/* BOTÃO PARA MOSTRAR/OCULTAR AVALIAÇÕES */}
            <button 
                className="detail-reviews-link" 
                onClick={handleToggleReviews}
                style={{ background: 'none', border: 'none', padding: 0 }}
            >
                {showReviews ? 
                    (<>Ocultar Avaliações ({produto.avaliacoes?.length || 0}) <FaChevronUp /></>) : 
                    (<>Ver Avaliações ({produto.avaliacoes?.length || 0}) <FaChevronDown /></>)
                }
            </button>
            
          </div>
        </div>
        
        {/* SEÇÃO DE AVALIAÇÕES - EXIBIDA CONDICIONALMENTE */}
        {showReviews && (
            <div className="product-detail-container">
                <div style={{ flex: '1 1 100%' }}>
                    <ReviewSection produto={produto} />
                </div>
            </div>
        )}
        
      </main>
      <Footer />
    </>
  );
}