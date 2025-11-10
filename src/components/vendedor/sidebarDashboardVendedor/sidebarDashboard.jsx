import { Link, useLocation } from "react-router-dom"; // Importa useLocation

// URL da imagem local (assumindo que a imagem está na raiz de assets/images/fotovendedor)
import fotoPerfilPath from "../../../assets/images/fotovendedor/fotoPerfil.png";

import "./sidebarDashboard.css";

export default function SidebarDashboard() {
  const location = useLocation(); // Hook para saber a rota atual
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div className="container-sidebar-dashboard">
      <div>
        <div className="sidebar-info-vendedor">
          <div>
            <img
              src={fotoPerfilPath}
              alt="Foto de Perfil do Vendedor"
            />
          </div>
          <div>
            <h2>Pedro Alcântara</h2>
            <p>CNPJ: 07.405.888/0001-91</p>
          </div>
        </div>
        <div className="sidebar-nav-itens">
          <Link to={"/minha-loja"}>
            <div className={`sidebar-nav-item ${isActive("/minha-loja") ? "sidebar-active" : ""}`}>
              <i className="fa-regular fa-house"></i>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to={"/minha-loja/vendas"}>
            <div className={`sidebar-nav-item ${isActive("/minha-loja/vendas") ? "sidebar-active" : ""}`}>
              <i className="fa-solid fa-chart-simple"></i>
              <p>Vendas</p>
            </div>
          </Link>
          <Link to={"/minha-loja/pedidos"}> {/* Rota de Pedidos, ainda a ser implementada */}
            <div className={`sidebar-nav-item ${isActive("/minha-loja/pedidos") ? "sidebar-active" : ""}`}>
              <i className="fa-solid fa-box-open"></i>
              <p>Pedidos</p>
            </div>
          </Link>
          <Link to={"/minha-loja/produtos"}>
            <div className={`sidebar-nav-item ${isActive("/minha-loja/produtos") ? "sidebar-active" : ""}`}>
              <i className="fa-solid fa-bag-shopping"></i>
              <p>Produtos</p>
            </div>
          </Link>
          <Link to={"/minha-loja/chat"}>
            <div className={`sidebar-nav-item ${isActive("/minha-loja/chat") ? "sidebar-active" : ""}`}>
              <i className="fa-regular fa-comment"></i>
              <p>Chat</p>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Link to={"/"}>
          <div className="sidebar-sair">
            <i className="fa-solid fa-right-from-bracket"></i>
            <p>Voltar para a página inicial</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
