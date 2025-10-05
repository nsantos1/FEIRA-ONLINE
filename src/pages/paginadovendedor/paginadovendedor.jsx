// PaginaDoVendedor.jsx
import React, { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaComment,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import produtos from "../../data/produtos.js";
import fotoPerfil from "../../assets/images/fotovendedor/fotoPerfil.png";
import decoracaoTopo from "../../assets/images/decoracaodeProdutos/decoracaoProdutosVendedor.svg";
import "./style.css";

const NOME_DA_LOJA = "Feira do Pedro";

const PaginaDoVendedor = () => {
  const { id } = useParams();
  const [favoritoLoja, setFavoritoLoja] = useState(false);

  const vendedor = {
    nome: NOME_DA_LOJA,
    avaliacao: 4.8,
    foto: fotoPerfil,
    localizacao: "Belo Horizonte - MG",
    descricao: "Produtos frescos e orgânicos direto da fazenda",
  };

  const produtosDoVendedor = useMemo(() => {
    return produtos.filter((produto) => {
      const categoria = produto.categoria ? produto.categoria.toLowerCase() : "";
      return categoria.includes("fruta") || categoria.includes("verdura");
    });
  }, [produtos]);

  const avaliacoes = [
    {
      id: 1,
      nome: "Nicolas Santos",
      nota: 5,
      comentario: "Adorei a qualidade dos produtos, estou comprando sempre.",
      data: "hoje 18h05",
    },
    {
      id: 2,
      nome: "João Ribeiro",
      nota: 5,
      comentario: "Muito satisfeito, tudo bem cuidado.",
      data: "hoje 18h05",
    },
    {
      id: 3,
      nome: "Eduardo Bielecky",
      nota: 5,
      comentario: "Qualidade ótima, mas o preço pode melhorar.",
      data: "hoje 18h05",
    },
    {
      id: 4,
      nome: "Eduardo Vicentini",
      nota: 5,
      comentario: "Gostei muito, minha família adorou e recomendo demais!",
      data: "hoje 18h05",
    },
    {
      id: 5,
      nome: "Caio Ribeiro",
      nota: 5,
      comentario: "Gostei muito, minha filha adorou e super recomendo!",
      data: "hoje 18h05",
    },
  ];

  const handleFavoritoLoja = useCallback(() => {
    setFavoritoLoja((prev) => !prev);
  }, []);

  const handleAdicionarCarrinho = useCallback((produtoId) => {
    console.log("Adicionar ao carrinho:", produtoId);
  }, []);

  const renderEstrelas = (nota) =>
    [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < nota ? "estrela-preenchida" : "estrela-vazia"}
      />
    ));

  const getTipoProduto = (categoria) => {
    if (!categoria) return "Produtos";
    const cat = categoria.toLowerCase();

    if (cat.includes("fruta")) return "Frutas";
    if (cat.includes("verdura")) return "Verduras";
    if (cat.includes("legume")) return "Legumes";

    return "Produtos";
  };

  const getInfoAdicional = (nome) => {
    const match = nome.match(/\((.*?)\)/);
    let formato = "un";
    let peso = "500g";

    if (match?.[1]) {
      const info = match[1].toLowerCase();
      if (info.includes("kg")) {
        formato = "kg";
        peso = "1 Kg";
      } else if (info.includes("l")) {
        formato = "l";
        peso = "1 L";
      } else if (info.includes("ml")) {
        formato = "ml";
        peso = "500 ml";
      } else if (info.includes("g") && !info.includes("kg")) {
        formato = "g";
        peso = info;
      } else if (info.includes("unidade")) {
        formato = "un";
        peso = "1 un";
      } else if (info.includes("dúzia")) {
        formato = "dz";
        peso = "1 dz";
      }
    }

    return { peso, formato };
  };

  const formatarPreco = (valor) => `R$ ${valor.toFixed(2).replace(".", ",")}`;

  return (
    <>
      <Header />
      <main className="pagina-vendedor">
        <div
          className="decoracao-topo"
          style={{ backgroundImage: `url(${decoracaoTopo})` }}
        ></div>

        <div className="container-vendedor">
          <aside className="info-vendedor">
            <div className="card-vendedor">
              <div className="foto-vendedor">
                <img src={vendedor.foto} alt={vendedor.nome} />
              </div>
              <h2 className="nome-vendedor">{vendedor.nome}</h2>
              <div className="avaliacao-vendedor">
                {renderEstrelas(Math.floor(vendedor.avaliacao))}
                <span className="nota-vendedor">{vendedor.avaliacao}</span>
              </div>
              <div className="localizacao-vendedor">
                <FaMapMarkerAlt className="icone-localizacao" />
                <span>{vendedor.localizacao}</span>
              </div>

              <button className="btn-solicitar-orcamento">
                <FaComment /> Falar com o vendedor
              </button>
              <button
                className={`btn-favoritar ${favoritoLoja ? "favoritado" : ""}`}
                onClick={handleFavoritoLoja}
              >
                <FaHeart /> Favoritar loja
              </button>
            </div>

            <div className="avaliacoes-clientes">
              <h3 className="titulo-avaliacoes">Avaliações de clientes</h3>
              {avaliacoes.map((avaliacao) => (
                <div key={avaliacao.id} className="card-avaliacao">
                  <div className="avatar-avaliacao">
                    {avaliacao.nome.charAt(0)}
                  </div>
                  <div className="conteudo-avaliacao">
                    <div className="header-avaliacao">
                      <span className="nome-avaliador">{avaliacao.nome}</span>
                      <div className="estrelas-avaliacao">
                        {renderEstrelas(avaliacao.nota)}
                      </div>
                    </div>
                    <p className="comentario-avaliacao">
                      {avaliacao.comentario}
                    </p>
                    <span className="data-avaliacao">{avaliacao.data}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="produtos-vendedor">
            <div className="grid-produtos">
              {produtosDoVendedor.map((produto) => {
                const tipo = getTipoProduto(produto.categoria);
                const info = getInfoAdicional(produto.nome);

                return (
                  <div key={produto.id} className="card-produto">
                    <span
                      className={`badge-categoria badge-${tipo.toLowerCase()}`}
                    >
                      {tipo}
                    </span>
                    <div className="imagem-produto">
                      <img src={produto.imagem} alt={produto.nome} />
                    </div>
                    <h3 className="nome-produto">
                      {produto.nome.replace(/\s*\(.*\)/, "")}
                    </h3>
                    <p className="nome-loja-produto">{vendedor.nome}</p>

                    <div className="info-produto">
                      <p className="detalhe-produto">Produzido: 15/09/2025</p>
                      <p className="detalhe-produto">Validade: 22/09/2025</p>
                      <p className="detalhe-produto">Peso: {info.peso}</p>
                    </div>

                    <div className="footer-produto">
                      <span className="preco-produto">
                        {formatarPreco(produto.preco)}
                        <small>/{info.formato}</small>
                      </span>
                      <button
                        className="btn-adicionar-carrinho"
                        onClick={() => handleAdicionarCarrinho(produto.id)}
                      >
                        <FaShoppingCart /> Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaginaDoVendedor;
