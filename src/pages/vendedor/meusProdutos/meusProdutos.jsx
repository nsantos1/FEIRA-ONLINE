import { FaPlus, FaSearch } from "react-icons/fa";
import CardProdutoGerenciamento from "../../../components/vendedor/meusProdutos/cardProdutoGerenciamento/cardProdutoGerenciamento";

import "./meusProdutos.css"

export default function MeusProdutos() {
    const produto = {
        imagem: "https://images.unsplash.com/photo-1587334206596-c0f9f7dccbe6?q=80&w=881&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        nome: "Banana nanica",
        categoria: "Fruta",
        estoque: 120,
        vencimento: "31/12/2025",
        status: "Ativo",
    };

    return (
        <>
            {/*<SidebarVendedor />*/}
            <main className="main-meus-produtos">
                <section className="resumo-produtos">
                    <h1>Produtos</h1>
                    <div>
                        <div className="grid-resumo-produtos">
                            <div className="grid-item-resumo-produtos">
                                <h2>Produtos ativos</h2>
                                <span>120</span>
                            </div>

                            <div className="grid-item-resumo-produtos">
                                <h2>Estoque baixo</h2>
                                <span>30</span>
                            </div>

                            <div className="grid-item-resumo-produtos">
                                <h2>Esgotados</h2>
                                <span>80</span>
                            </div>

                            <div className="grid-item-resumo-produtos">
                                <h2>Perto da data do vencimento</h2>
                                <span>30</span>
                            </div>

                            <div className="grid-item-resumo-produtos">
                                <h2>Vencidos</h2>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="gerenciamento-produtos">
                    <h1>Gerenciamento de produtos</h1>
                    <div className="grid-wrapper-gerenciamento-produtos">
                        <div className="header-gerenciamento-produtos">
                            <div>
                                <button>
                                    <FaPlus /> Adicionar produto
                                </button>
                            </div>

                            <div>
                                {/* Ícone bugga pq placeholder so aceita texto, fazer alguma gambiarra, talvez um wrapper pra solucionar */}
                                <input type="text" placeholder={`${<FaSearch />} Buscar produto`} />
                                
                                <select name="categoria" id="categoria">

                                </select>

                                <select name="status" id="status">

                                </select>
                            </div>
                        </div>

                        <div className="grid-produtos">
                            {/*produtosDoVendedor.forEach(() => (
                                return <CardProdutoGerenciamento />
                                ))*/}
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />

                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                            <CardProdutoGerenciamento produto={produto} />
                        </div>

                        <div className="footer-gerenciamento-produtos">
                            <nav>

                            </nav>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}