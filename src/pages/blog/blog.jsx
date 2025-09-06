import Banner from "../../components/Blog/bannerBlog";
import {
  CardPostRecente,
  PostDestaque,
  PostRecenteDestaque,
} from "../../components/Blog/cardsBlog";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import "./styles.css";

export default function Blog() {
  return (
    <>
      <Header />

      <main className="main-blog">
        <div className="blog-container">
          <Banner />

          <div className="blog-categorias">
            <h3>Leia por categoria</h3>
            <hr />
            <div className="blog-categorias-container">
              <a href="#" className="blog-categorias-card-1">
                <div>
                  <h4>Frutas e Verduras</h4>
                </div>
              </a>
              <a href="#" className="blog-categorias-card-2">
                <div>
                  <h4>Mercado</h4>
                </div>
              </a>
              <a href="#" className="blog-categorias-card-3">
                <div>
                  <h4>Padaria</h4>
                </div>
              </a>
            </div>
          </div>

          <div className="blog-destaques">
            <h3>Posts em destaque</h3>
            <hr />
            <div className="blog-destaques-container">
              <PostDestaque
                categoria={"Frutas e Verduras"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Nova safra de tomates desperdiçada devido a baixa taxa de conectividade entre fornecedores e clientes"
                }
              />

              <PostDestaque
                categoria={"Mercado"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Mercados de São Paulo entram em crise por despedícios de alimentos"
                }
              />

              <PostDestaque
                categoria={"Padaria"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Ranking das melhores padarias e confeitarias da cidade de São Paulo - 2025"
                }
              />
            </div>
          </div>
          <div className="blog-recentes">
            <h3>Posts recentes</h3>
            <hr />

            <PostRecenteDestaque
              capa={
                "https://images.unsplash.com/photo-1473648717346-73c9c15cbad6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              categoria={"Padaria"}
              data={"13 de Junho, 2025"}
              titulo={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatum"
              }
              resumo={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a quibusdam explicabo, optio laborum, molestiae aperiam iste odio dolor nobis voluptates perspiciatis quam, repellat neque et dolorem qui molestias facere."
              }
            />

            <div className="blog-recentes-container">
              <CardPostRecente
                capa={
                  "https://images.unsplash.com/photo-1605522283494-4901a98d458e?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                categoria={"Padaria"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Ranking das melhores padarias e confeitarias da cidade de São Paulo - 2025"
                }
                resumo={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolor ipsam alias cumque sint aliquid quod itaque! Natus similique"
                }
              />

              <CardPostRecente
                capa={
                  "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                categoria={"Padaria"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Ranking das melhores padarias e confeitarias da cidade de São Paulo - 2025"
                }
                resumo={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolor ipsam alias cumque sint aliquid quod itaque! Natus similique"
                }
              />

              <CardPostRecente
                capa={
                  "https://images.unsplash.com/photo-1464297162577-f5295c892194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                categoria={"Mercado"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Mercados de São Paulo entram em crise por despedícios de alimentos"
                }
                resumo={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolor ipsam alias cumque sint aliquid quod itaque! Natus similique"
                }
              />

              <CardPostRecente
                capa={
                  "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                categoria={"Frutas e Verduras"}
                data={"13 de Junho, 2025"}
                titulo={
                  "Nova safra de tomates desperdiçada devido a baixa taxa de conectividade entre fornecedores e clientes"
                }
                resumo={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolor ipsam alias cumque sint aliquid quod itaque! Natus similique"
                }
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
