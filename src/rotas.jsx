import { Route, BrowserRouter, Routes } from "react-router-dom";

import Index from "./pages/index/index.jsx";
import About from "./pages/about/about.jsx";
import LoginERegistro from "./pages/loginERegistro/loginERegistro.jsx";
import ProdutosFavoritos from "./pages/produtosFavoritos/produtosFavoritos.jsx";
import CarrinhoDeCompras from "./pages/carrinhodecompras/carrinhodecompras.jsx";
import Blog from "./pages/blog/blog.jsx";
import Contato from "./pages/contato/contact.jsx";
import Pesquisa from "./pages/pesquisa/pesquisa.jsx";
import Produtos from "./pages/produtos/produtos.jsx";
import SistemaDeAvaliacao from "./pages/sistemadeavaliacao/sistemadeavaliacao.jsx";
import PaginaDoVendedor from "./pages/paginadovendedor/paginadovendedor.jsx";
import DetalhesDoProduto from "./pages/detalhesDoProduto/detalhesDoProduto.jsx";

// Páginas de acesso do Vendedor
import MeusProdutos from "./pages/vendedor/meusProdutos/meusProdutos.jsx";
import ChatClientes from "./pages/vendedor/chatClientes/chatClientes.jsx";


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
            <Route path="/pesquisa" element={<Pesquisa />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/avaliacoes/:id" element={<SistemaDeAvaliacao />} />
            <Route path="/vendedor/:id" element={<PaginaDoVendedor />} />
            <Route path="/produto/:id" element={<DetalhesDoProduto />} />

            {/* Rotas de acesso do Vendedor // definir melhor o nome da rota */}
            <Route path="/minha-loja/produtos" element={<MeusProdutos />} />
            <Route path="/minha-loja/chat" element={<ChatClientes />} />
        </Routes>
    </BrowserRouter>
 );
};

export default Rotas;