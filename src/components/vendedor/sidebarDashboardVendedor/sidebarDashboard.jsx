import "./sidebarDashboard.css";
import { Link } from "react-router-dom";

export default function SidebarDashboard() {
  return (
    <div className="container-sidebar-dashboard">
      <div>
        <div className="sidebar-info-vendedor">
          <div>
            <img
              src="..\src\assets\images\fotovendedor\fotoPerfil.png"
              alt=""
            />
          </div>
          <div>
            <h2>Pedro Alcântara</h2>
            <p>CNPJ: 07.405.888/0001-91</p>
          </div>
        </div>
        <div className="sidebar-nav-itens">
          <Link>
            <div className="sidebar-nav-item">
              <i class="fa-regular fa-house"></i>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link>
            <div className="sidebar-nav-item">
              <i class="fa-solid fa-chart-simple"></i>
              <p>Vendas</p>
            </div>
          </Link>
          <Link>
            <div className="sidebar-nav-item">
              <i class="fa-solid fa-box-open"></i>
              <p>Pedidos</p>
            </div>
          </Link>
          <Link to={"/minha-loja/produtos"}>
            <div className="sidebar-nav-item">
              <i class="fa-solid fa-bag-shopping"></i>
              <p>Produtos</p>
            </div>
          </Link>
          <Link to={"/minha-loja/chat"}>
            <div className="sidebar-nav-item">
              <i class="fa-regular fa-comment"></i>
              <p>Chat</p>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Link to={"/"}>
          <div className="sidebar-sair">
            <i class="fa-solid fa-right-from-bracket"></i>
            <p>Voltar para a página inicial</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
