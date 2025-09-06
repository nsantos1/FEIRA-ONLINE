import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const navigate = useNavigate();

  // Função para lidar com a pesquisa
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (termoPesquisa.toLowerCase() === "milho") {
        navigate("/pesquisa");
      }
    }
  };

  return (
    <header>
      <div className="linha-1-header">
        <Link className="logo" to="/">
          FeiraOnline.
        </Link>

        <input
          className="pesquisa"
          type="search"
          name="pesquisa"
          placeholder="Procure o item que deseja..."
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          onKeyDown={handleSearch}
        />

        <div className="header-icons">
          <Link to="/logineregistro" aria-label="Área do usuário">
            <i className="fa-regular fa-user"></i>
          </Link>
          <Link to="/favoritos" aria-label="Favoritos">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to="/carrinho" aria-label="Carrinho de compras">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Produtos</a>
            <ul className="submenu">
              <li>
                <a href="#">Frutas e Verduras</a>
              </li>
              <li>
                <a href="#">Bebê e Gravidez</a>
              </li>
              <li>
                <a href="#">Bebidas</a>
              </li>
              <li>
                <a href="#">Carnes e Frutos do Mar</a>
              </li>
              <li>
                <a href="#">Biscoitos e Snacks</a>
              </li>
              <li>
                <a href="#">Pães e Padaria</a>
              </li>
              <li>
                <a href="#">Café da Manhã e Laticínios</a>
              </li>
              <li>
                <a href="#">Congelados</a>
              </li>
              <li>
                <a href="#">Mercearia e Básicos</a>
              </li>
              <li>
                <a href="#">Saúde</a>
              </li>
              <li>
                <a href="#">Produtos para o Lar</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
