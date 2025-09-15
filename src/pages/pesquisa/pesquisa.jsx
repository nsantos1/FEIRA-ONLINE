import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Fuse from "fuse.js";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import CardProduto from "../../components/produtos/cardProduto"; 
import todosProdutos from "../../data/produtos.js"; 
import "./styles.css";

export default function Pesquisa() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // Pega o termo da URL (?q=...)

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    // Só executa a busca se houver um termo na URL
    if (query && todosProdutos.length > 0) {
      // Configuração do Fuse.js
      const fuse = new Fuse(todosProdutos, {
        keys: ["nome", "categoria"], // Onde ele deve procurar (nome e categoria do produto)
        includeScore: true,
        threshold: 0.3, // Nível de "flexibilidade" (0 é exato, 1 é muito flexível)
        ignoreLocation: true,
      });

      const result = fuse.search(query);
      const items = result.map(item => item.item); // Extrai apenas os objetos dos produtos
      setResultados(items);
    }
  }, [query]); // A busca é refeita sempre que o termo na URL mudar

  return (
    <>
      <Header />
      <main className="pesquisa-page-main">
        <div className="main-content-pesquisa">
          <div className="titulo-pesquisa">
            {/* Título dinâmico que reflete a busca */}
            <h2>
              {query ? `Resultados da sua busca por "${query}"` : "Faça uma busca"}
            </h2>
          </div>

          {/* Renderização condicional: mostra resultados ou uma mensagem */}
          {query && resultados.length > 0 && (
            <div className="lista-produtos-pesquisa">
              {resultados.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))}
            </div>
          )}

          {query && resultados.length === 0 && (
            <div className="sem-resultados">
              <i className="fa-solid fa-magnifying-glass"></i>
              <h3>Nenhum resultado encontrado</h3>
              <p>Tente usar termos diferentes ou verifique a ortografia.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}