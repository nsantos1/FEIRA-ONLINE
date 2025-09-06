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
                  src="src/assets/images/index/cestodefruta.jpg"
                  alt="Cesto de fruta"
                />
                <p className="categorias-produto_texto"> Frutas</p>
              </a>
            </div>
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img
                  src="src/assets/images/index/vegetais.jpeg"
                  alt="Vegetais"
                />
                <p className="categorias-produto_texto"> Vegetais</p>
              </a>
            </div>
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img
                  src="src/assets/images/index/Laticinios.png"
                  alt="Laticínios"
                />
                <p className="categorias-produto_texto"> Laticínios</p>
              </a>
            </div>
            <div className="categorias-produto">
              <a className="categorias-produto_link" href="#">
                <img src="src/assets/images/index/graos.jpg" alt="Grãos" />
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
            src="https://www.youtube.com/embed/XcelvGvmbdc?si=Xu9S5s9VGiVQf5l_"
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