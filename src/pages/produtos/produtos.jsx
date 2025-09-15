import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/produtos/sidebar";
import CardProduto from "../../components/produtos/cardProduto";
import todosProdutos from "../../data/produtos";
import "./styles.css";

export default function Produtos() {
  // 2. INICIA O HOOK PARA LER OS PARÂMETROS DA URL
  const [searchParams] = useSearchParams();
  // Pega o valor do parâmetro 'categoria', se existir.
  const categoriaDaURL = searchParams.get("categoria");

  // --- Estados para gerenciar os filtros e os produtos exibidos ---
  const [produtosExibidos, setProdutosExibidos] = useState(todosProdutos);
  // 3. O ESTADO INICIAL DA CATEGORIA AGORA VEM DA URL
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoriaDaURL);
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");

  useEffect(() => {
    let produtosFiltrados = todosProdutos;

    // Se uma categoria foi passada pela URL, define o estado do filtro.
    // Isso garante que o filtro seja aplicado mesmo se o usuário navegar entre categorias.
    const categoriaAtiva = categoriaDaURL || categoriaSelecionada;

    if (categoriaAtiva) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.categoria === categoriaAtiva
      );
    }
    if (precoMin !== "") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.preco >= parseFloat(precoMin)
      );
    }
    if (precoMax !== "") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.preco <= parseFloat(precoMax)
      );
    }

    setProdutosExibidos(produtosFiltrados);
    // 4. ADICIONA categoriaDaURL À LISTA DE DEPENDÊNCIAS
    // A filtragem será re-executada sempre que a categoria na URL mudar.
  }, [categoriaSelecionada, precoMin, precoMax, categoriaDaURL]);

  const limparFiltros = () => {
    // Ao limpar, também devemos navegar para a URL base de produtos
    // (Isso é opcional, mas consistente)
    window.history.pushState({}, "", "/produtos");
    setCategoriaSelecionada(null);
    setPrecoMin("");
    setPrecoMax("");
  };

  return (
    <>
      <Header />
      <main className="products-page-main">
        <div className="products-page-header">
          <h1>Nossos Produtos</h1>
          <p>
            Encontre tudo o que precisa, fresquinho e direto do produtor para
            sua casa.
          </p>
        </div>
        <div className="products-page-content">
          <Sidebar
            setCategoriaSelecionada={setCategoriaSelecionada}
            categoriaAtiva={categoriaDaURL || categoriaSelecionada}
            precoMin={precoMin}
            setPrecoMin={setPrecoMin}
            precoMax={precoMax}
            setPrecoMax={setPrecoMax}
            limparFiltros={limparFiltros}
          />
          <div className="products-grid-container">
            <div className="products-grid-header">
              <span>Mostrando {produtosExibidos.length} produtos</span>
            </div>
            {produtosExibidos.length > 0 ? (
              <div className="products-grid">
                {produtosExibidos.map((produto) => (
                  <CardProduto key={produto.id} produto={produto} />
                ))}
              </div>
            ) : (
              <div className="no-products-found">
                <i className="fa-solid fa-store-slash"></i>
                <h2>Nenhum produto encontrado</h2>
                <p>Tente ajustar seus filtros ou limpar a seleção.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}