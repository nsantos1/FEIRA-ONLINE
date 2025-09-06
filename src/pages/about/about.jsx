import BannerAbout from "../../components/about/bannerAbout";
import CardIntegrante from "../../components/about/cardIntegrante";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./styles.css";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <BannerAbout />
        <div className="conteudo-about">
          <div className="sobre-conteudo-about">
            <h3>Sobre a FeiraOnline</h3>
            <p>
              A FeiraOnline nasceu com um propósito claro: transformar a forma
              como pequenos produtores e agricultores familiares se conectam com
              os consumidores finais. Em um cenário onde a produção local muitas
              vezes enfrenta barreiras para alcançar o mercado, nossa plataforma
              digital surge como um elo direto entre quem produz e quem consome,
              eliminando intermediários e fortalecendo a economia local. Ao
              facilitar essa conexão direta, também contribuímos para a redução
              do desperdício de alimentos. Muitos pequenos produtores enfrentam
              dificuldades para escoar sua produção no tempo certo, o que leva à
              perda de alimentos que poderiam estar na mesa de quem mais
              precisa. Com a FeiraOnline, ajudamos a garantir que esses
              alimentos cheguem ao destino certo, na hora certa, frescos,
              saudáveis e valorizados. A FeiraOnline também gera renda para quem
              vive da agricultura familiar e facilita o acesso dos consumidores
              a alimentos saudáveis, por um preço justo. Tudo isso contribui
              para um sistema mais justo, sustentável e alinhado ao ODS 2 - Fome
              Zero e Agricultura Sustentável.
            </p>
          </div>
          <hr />
          <div className="linha-about">
            <div>
              <h3>Produtos frescos</h3>
              <p>
                Tudo que você encontra na Feira Online vem direto de quem
                produz, sem atravessadores nem longos estoques. São alimentos
                colhidos no tempo certo, com cuidado artesanal, sabor natural e
                qualidade que você sente na primeira mordida.
              </p>
            </div>
            <div>
              <h3>Impacto que transforma</h3>
              <p>
                Apoiamos quem planta com respeito, geramos renda justa, e
                fortalecemos a economia local. Todo envio, cada parceria e cada
                história representam nossa dedicação a uma agricultura mais
                humana, bonita e duradoura.
              </p>
            </div>
          </div>
          <div className="linha-about">
            <div>
              <h3>Feira Comunitária de Verdade</h3>
              <p>
                Tudo aqui nasce do nosso compromisso com quem planta e com quem
                consome. Cada produto tem origem familiar, cada página reflete o
                cuidado humano, e cada compra fortalece vínculos de confiança.
              </p>
            </div>
            <div>
              <h3>Direto da origem</h3>
              <p>
                Conectamos você diretamente com quem produz garantindo mais
                frescor, preço justo e valorização do trabalho do pequeno
                produtor.
              </p>
            </div>
          </div>
          <div className="linha-about">
            <div>
              <h3>Compromisso com a agricultura familiar</h3>
              <p>
                Nosso modelo fortalece comunidades rurais, promove a economia
                local e contribui para uma alimentação mais consciente e
                sustentável.
              </p>
            </div>
            <div>
              <h3>Menos desperdício, mais consciência</h3>
              <p>
                Trabalhamos com produtores que valorizam cada etapa do cultivo.
                Evitamos excessos, respeitamos o tempo da natureza e ajudamos a
                reduzir o desperdício de alimentos.
              </p>
            </div>
          </div>
          <hr />
          <div class="video-pitch">
            <h3>Vídeo Pitch</h3>
            <div>
              <a
                href="https://www.youtube.com/shorts/zJ5Cd0wd7vI"
                target="_blank"
                class="banner-youtube"
              >
                <img src="src\assets\fiap.png" alt="Assista no YouTube" />
              </a>
            </div>
          </div>
          <hr />
          <div className="time-about">
            <h3>Nosso time</h3>
            <div className="time-about-integrantes">
              <CardIntegrante
                link={"https://github.com/JoaoRicardoSOC"}
                foto={"https://avatars.githubusercontent.com/u/200935676?v=4"}
                nome={"João Ricardo"}
              />
              <CardIntegrante
                link={"https://github.com/nsantos1"}
                foto={"https://avatars.githubusercontent.com/u/107138521?v=4"}
                nome={"Nicolas Santos"}
              />
              <CardIntegrante
                link={"https://github.com/cmribeiro1"}
                foto={"https://avatars.githubusercontent.com/u/205084031?v=4"}
                nome={"Caio Ribeiro"}
              />
              <CardIntegrante
                link={"https://github.com/edubielecky"}
                foto={"https://avatars.githubusercontent.com/u/205084031?v=4"}
                nome={"Eduardo Bielecky"}
              />
              <CardIntegrante
                link={"#"}
                foto={"https://avatars.githubusercontent.com/u/205084031?v=4"}
                nome={"Eduardo Vicentini"}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
