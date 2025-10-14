import { useMemo } from "react";
import "./styles.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SemProdutosFavoritos from "../../components/produtosFavoritos/divSemProdutosFavoritos";
import CardProdutoFavorito from "../../components/produtosFavoritos/cardProdutoFavorito";
import { useFavoritos } from "../../components/favoritos/logicaFavoritos";
import todosProdutos from "../../data/produtos"; 

export default function ProdutosFavoritos() {
  const { favoritos, favoritarItem } = useFavoritos();

  const produtosFavoritados = useMemo(() => {
    return todosProdutos.filter(produto => favoritos.includes(produto.id));
  }, [favoritos]);
  
  const handleToggleFavorite = (id) => {
      favoritarItem(id);
  }

  const getRatingInfo = (produto) => {
      const avaliacoes = produto.avaliacoes || [];
      const media = avaliacoes.reduce((acc, a) => acc + (Number(a.nota) || 0), 0) / (avaliacoes.length || 1);
      
      return {
          media,
          total: avaliacoes.length
      };
  }

  return (
    <>
      <Header />
      <main>
        <div className="main-content-favoritos">
          <div className="titulo-favoritos">
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
            <h2>FAVORITOS ({produtosFavoritados.length})</h2>
          </div>
          
          {produtosFavoritados.length === 0 ? (
            <SemProdutosFavoritos />
          ) : (
            <div className="lista-produtos-favoritos">
              {produtosFavoritados.map((produto) => {
                const ratingInfo = getRatingInfo(produto);
                // Gera um preço "original" um pouco maior que o atual para simular desconto
                const precoOriginal = produto.preco * 1.2; 
                const precoFormatado = (valor) => valor.toFixed(2).replace('.', ',');

                return (
                  <CardProdutoFavorito
                    key={produto.id}
                    produtoId={produto.id} 
                    produtoFoto={produto.imagem}
                    produtoCategoria={produto.categoria}
                    produtoTitulo={produto.nome}
                    produtoNumAvaliacoes={ratingInfo.total}
                    produtoPrecoOriginal={precoFormatado(precoOriginal)} 
                    produtoPrecoAtual={precoFormatado(produto.preco)}
                    onRemoveFavorite={() => handleToggleFavorite(produto.id)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}