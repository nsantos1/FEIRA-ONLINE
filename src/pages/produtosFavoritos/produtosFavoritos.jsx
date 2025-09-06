import "./styles.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import SemProdutosFavoritos from "../../components/Produtos-Favoritos/divSemProdutosFavoritos";
import CardProdutoFavorito from "../../components/Produtos-Favoritos/cardProdutoFavorito";

export default function ProdutosFavoritos() {
  return (
    <>
      <Header />
      <main>
        <div className="main-content-favoritos">
          <div className="titulo-favoritos">
            <span>
              <i class="fa-solid fa-heart"></i>
            </span>
            <h2>FAVORITOS</h2>
          </div>
          <SemProdutosFavoritos />
          <div className="lista-produtos-favoritos">
            <CardProdutoFavorito
              produtoFoto={
                "https://images.unsplash.com/photo-1587334206596-c0f9f7dccbe6?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              produtoCategoria={"Frutas"}
              produtoTitulo={"Cacho de banana prata, 1kg"}
              produtoNumAvaliacoes={"39"}
              produtoPrecoOriginal={"15,99"}
              produtoPrecoAtual={"9,90"}
            />
            <CardProdutoFavorito
              produtoFoto={
                "https://images.unsplash.com/photo-1678942946279-c83e37f32304?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              produtoCategoria={"Frutas"}
              produtoTitulo={"Maçã verde, 1kg"}
              produtoNumAvaliacoes={"21"}
              produtoPrecoOriginal={"13,90"}
              produtoPrecoAtual={"11,90"}
            />
            <CardProdutoFavorito
              produtoFoto={
                "https://images.unsplash.com/photo-1615485925763-86786288908a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              produtoCategoria={"Frutas"}
              produtoTitulo={"Cacho de uvas sem sementes, Unidade"}
              produtoNumAvaliacoes={"80"}
              produtoPrecoOriginal={"9,90"}
              produtoPrecoAtual={"8,90"}
            />
            <CardProdutoFavorito
              produtoFoto={
                "https://images.unsplash.com/photo-1615485925763-86786288908a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              produtoCategoria={"Frutas"}
              produtoTitulo={"Cacho de uvas sem sementes, Unidade"}
              produtoNumAvaliacoes={"80"}
              produtoPrecoOriginal={"9,90"}
              produtoPrecoAtual={"8,90"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
