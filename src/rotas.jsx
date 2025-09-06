import { Route, BrowserRouter, Routes } from "react-router-dom";

import Index from "./pages/index/index.jsx";
import About from "./pages/about/about.jsx";
import LoginERegistro from "./pages/loginERegistro/loginERegistro.jsx";
import ProdutosFavoritos from "./pages/produtosFavoritos/produtosFavoritos.jsx";
import CarrinhoDeCompras from "./pages/carrinhodecompras/carrinhodecompras.jsx";
import Blog from "./pages/blog/blog.jsx";
import Contato from "./pages/contato/contact.jsx";
import Pesquisa from "./pages/pesquisa/pesquisa.jsx"; // Importa a nova página

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/logineregistro" element={<LoginERegistro />} />
        <Route path="/favoritos" element={<ProdutosFavoritos />} />
        <Route path="/carrinho" element={<CarrinhoDeCompras />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pesquisa" element={<Pesquisa />} /> {/* Adiciona a rota de pesquisa */}
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;