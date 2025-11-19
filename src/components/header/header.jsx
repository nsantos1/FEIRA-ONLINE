import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const categorias = [
  "Frutas e Verduras", "Bebê e Gravidez", "Bebidas", "Carnes e Frutos do Mar",
  "Biscoitos e Snacks", "Pães e Padaria", "Café da Manhã e Laticínios",
  "Congelados", "Mercearia e Básicos", "Saúde", "Produtos para o Lar",
];

export default function Header() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const navigate = useNavigate();
  
  const [submenuVisivel, setSubmenuVisivel] = useState(false);

  const handleSearch = (event) => {
    // Se o usuário pressionar Enter e o campo não estiver vazio
    if (event.key === "Enter" && termoPesquisa.trim() !== "") {
      // Navega para a página de pesquisa, passando o termo como um parâmetro na URL
      navigate(`/pesquisa?q=${encodeURIComponent(termoPesquisa)}`);
    }
  };

  return (
    <header className="header-principal">
      <div className="linha-1-header">
        <Link className="logo" to="/">FeiraOnline.</Link>
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
          <Link to="/logineregistro" aria-label="Área do usuário"><i className="fa-regular fa-user"></i></Link>
          <Link to="/favoritos" aria-label="Favoritos"><i className="fa-regular fa-heart"></i></Link>
          <Link to="/carrinho" aria-label="Carrinho de compras"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
      <nav>
        <ul>
          <li 
            onMouseEnter={() => setSubmenuVisivel(true)} 
            onMouseLeave={() => setSubmenuVisivel(false)}
          >
            <Link to="/produtos">Produtos</Link>
            <ul className={`submenu ${submenuVisivel ? 'submenu-visivel' : ''}`}>
              {categorias.map((categoria, index) => (
                <li key={index}>
                  <Link to={`/produtos?categoria=${encodeURIComponent(categoria)}`}>
                    {categoria}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/sobre">Sobre Nós</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}