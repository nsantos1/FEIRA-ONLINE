import { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./styles.css";
import initMap from "../../../api/mapa"; // importa sua função de mapa

export default function Index() {
  useEffect(() => {
    if (window.google) {
      initMap(); // inicializa o mapa assim que o componente for montado
    }
  }, []);

  return (
    <>
      <Header />
      <main className="conteudo-principal">
        <div className="banner">
          <div className="texto-banner">
            <h1>Conectando Produtores e Consumidores</h1>
            <p>
              Compra diretamente de pequenos produtores e apoie a agricultura
              local
            </p>
            <a href="#" className="botao">
              Explorar Produtos
            </a>
          </div>
        </div>

        <div className="categorias">
          <h2 className="categorias-titulo"> Categorias Populares</h2>
          <div className="categorias-produtos">
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img
                  src="https://images.unsplash.com/photo-1701374930119-78a86eb6befc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cesto de fruta"
                />
                <p className="categorias-produto_texto"> Frutas</p>
              </a>
            </div>
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vegetais"
                />
                <p className="categorias-produto_texto"> Vegetais</p>
              </a>
            </div>
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img
                  src="https://images.unsplash.com/photo-1646834355190-0a48e7c760e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Laticínios"
                />
                <p className="categorias-produto_texto"> Laticínios</p>
              </a>
            </div>
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img src="https://images.unsplash.com/photo-1698845650846-4119019ddf05?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Grãos" />
                <p className="categorias-produto_texto"> Grãos</p>
              </a>
            </div>
          </div>
        </div>

        <div className="texto-informativo">
          <h2>Por que escolher a Feira Online?</h2>
          <div className="texto-informativo_paragrafo">
            <p>
              <i className="fas fa-seedling"></i> Produtos Frescos
            </p>
            <p>Alimentos de alta qualidade e direto do campo</p>
          </div>
          <div className="texto-informativo_paragrafo">
            <p>
              <i className="fas fa-lock"></i> Compra Segura
            </p>
            <p>Pagamentos seguros e proteção ao consumidor</p>
          </div>
          <div className="texto-informativo_paragrafo">
            <p>
              <i className="fas fa-truck"></i> Logística Eficiente
            </p>
            <p>Opções de entrega ou coleta rápida e na sua região</p>
          </div>
        </div>

        <div className="video-container">
          <h2>
            <i className="fa-brands fa-youtube"></i> Mais sobre a Feira Online
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/swLgt21uTB0?si=4ywTKDZc55U4bJT8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="localizacao">
          <div className="localizacao-texto">
            <h2 className="localizacao-titulo">
              Localize produtos perto de você
            </h2>
            <p className="localizacao-paragrafo">
              Encontre produtores locais, na região e tenha acesso a produtos
              frescos e sustentáveis
            </p>
          </div>
          <div
            id="mapa"
          ></div>
        </div>
      </main>
      <Footer />
    </>
  );
}