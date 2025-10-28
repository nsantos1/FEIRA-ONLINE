import { useRef, useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaPlus, FaSearch } from "react-icons/fa";

import CardProdutoGerenciamento from "../../../components/vendedor/meusProdutos/cardProdutoGerenciamento/cardProdutoGerenciamento";
import SidebarDashboard from "../../../components/vendedor/sidebarDashboardVendedor/sidebarDashboard";

import "./meusProdutos.css"

export default function MeusProdutos() {
    const produtosDoVendedor = [
        {
            imagem: "https://images.unsplash.com/photo-1587334206596-c0f9f7dccbe6?q=80&w=881&auto=format&fit=crop",
            nome: "Banana nanica",
            categoria: "Fruta",
            estoque: 120,
            vencimento: "31/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=881&auto=format&fit=crop",
            nome: "Maçã Fuji",
            categoria: "Fruta",
            estoque: 80,
            vencimento: "25/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1584270354949-1b6a1a9b9b33?q=80&w=881&auto=format&fit=crop",
            nome: "Tomate Italiano",
            categoria: "Legume",
            estoque: 50,
            vencimento: "10/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1615484477778-3b0a995d4b3e?q=80&w=881&auto=format&fit=crop",
            nome: "Alface Crespa",
            categoria: "Verdura",
            estoque: 25,
            vencimento: "05/11/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=881&auto=format&fit=crop",
            nome: "Leite Integral",
            categoria: "Laticínio",
            estoque: 200,
            vencimento: "15/01/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1565958011705-44e21199e0e1?q=80&w=881&auto=format&fit=crop",
            nome: "Iogurte Natural",
            categoria: "Laticínio",
            estoque: 60,
            vencimento: "20/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604908176997-43f89dfc3cf7?q=80&w=881&auto=format&fit=crop",
            nome: "Feijão Carioca",
            categoria: "Grão",
            estoque: 300,
            vencimento: "10/08/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=881&auto=format&fit=crop",
            nome: "Arroz Branco",
            categoria: "Grão",
            estoque: 500,
            vencimento: "22/09/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1617196035154-c9bfaffc8e84?q=80&w=881&auto=format&fit=crop",
            nome: "Pão Francês",
            categoria: "Padaria",
            estoque: 40,
            vencimento: "29/10/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=881&auto=format&fit=crop",
            nome: "Queijo Mussarela",
            categoria: "Laticínio",
            estoque: 75,
            vencimento: "28/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604908176997-43f89dfc3cf7?q=80&w=881&auto=format&fit=crop",
            nome: "Açúcar Refinado",
            categoria: "Grão",
            estoque: 150,
            vencimento: "18/07/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=881&auto=format&fit=crop",
            nome: "Café Torrado e Moído",
            categoria: "Bebida",
            estoque: 90,
            vencimento: "05/05/2027",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1565958011705-44e21199e0e1?q=80&w=881&auto=format&fit=crop",
            nome: "Manteiga com Sal",
            categoria: "Laticínio",
            estoque: 45,
            vencimento: "12/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1576402187878-974f70cbff0f?q=80&w=881&auto=format&fit=crop",
            nome: "Refrigerante Cola",
            categoria: "Bebida",
            estoque: 300,
            vencimento: "01/03/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=881&auto=format&fit=crop",
            nome: "Batata Inglesa",
            categoria: "Legume",
            estoque: 130,
            vencimento: "25/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1590080875831-7e8a1a79b9a6?q=80&w=881&auto=format&fit=crop",
            nome: "Cenoura",
            categoria: "Legume",
            estoque: 100,
            vencimento: "20/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1559561854-85e6710f8a48?q=80&w=881&auto=format&fit=crop",
            nome: "Presunto Fatiado",
            categoria: "Frios",
            estoque: 70,
            vencimento: "15/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604908176997-43f89dfc3cf7?q=80&w=881&auto=format&fit=crop",
            nome: "Macarrão Espaguete",
            categoria: "Massa",
            estoque: 220,
            vencimento: "08/08/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1585238342028-4c9021d8e0c2?q=80&w=881&auto=format&fit=crop",
            nome: "Molho de Tomate",
            categoria: "Molho",
            estoque: 180,
            vencimento: "10/01/2027",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604503468506-3f9e9d1f6b72?q=80&w=881&auto=format&fit=crop",
            nome: "Biscoito Recheado",
            categoria: "Snack",
            estoque: 260,
            vencimento: "30/06/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604908176997-43f89dfc3cf7?q=80&w=881&auto=format&fit=crop",
            nome: "Cebola Roxa",
            categoria: "Legume",
            estoque: 90,
            vencimento: "15/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=881&auto=format&fit=crop",
            nome: "Morango",
            categoria: "Fruta",
            estoque: 60,
            vencimento: "22/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1615484477778-3b0a995d4b3e?q=80&w=881&auto=format&fit=crop",
            nome: "Queijo Prato",
            categoria: "Laticínio",
            estoque: 55,
            vencimento: "10/01/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1590080875831-7e8a1a79b9a6?q=80&w=881&auto=format&fit=crop",
            nome: "Cenoura Baby",
            categoria: "Legume",
            estoque: 80,
            vencimento: "18/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1584270354949-1b6a1a9b9b33?q=80&w=881&auto=format&fit=crop",
            nome: "Pimentão Vermelho",
            categoria: "Legume",
            estoque: 70,
            vencimento: "20/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=881&auto=format&fit=crop",
            nome: "Iogurte Grego",
            categoria: "Laticínio",
            estoque: 40,
            vencimento: "05/11/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1617196035154-c9bfaffc8e84?q=80&w=881&auto=format&fit=crop",
            nome: "Pão Integral",
            categoria: "Padaria",
            estoque: 50,
            vencimento: "29/10/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=881&auto=format&fit=crop",
            nome: "Batata Doce",
            categoria: "Legume",
            estoque: 120,
            vencimento: "25/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1565958011705-44e21199e0e1?q=80&w=881&auto=format&fit=crop",
            nome: "Manteiga Sem Sal",
            categoria: "Laticínio",
            estoque: 35,
            vencimento: "12/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1576402187878-974f70cbff0f?q=80&w=881&auto=format&fit=crop",
            nome: "Suco de Laranja",
            categoria: "Bebida",
            estoque: 200,
            vencimento: "01/03/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604503468506-3f9e9d1f6b72?q=80&w=881&auto=format&fit=crop",
            nome: "Biscoito Integral",
            categoria: "Snack",
            estoque: 180,
            vencimento: "30/06/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1585238342028-4c9021d8e0c2?q=80&w=881&auto=format&fit=crop",
            nome: "Molho Pesto",
            categoria: "Molho",
            estoque: 90,
            vencimento: "10/01/2027",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=881&auto=format&fit=crop",
            nome: "Macarrão Penne",
            categoria: "Massa",
            estoque: 140,
            vencimento: "08/08/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1615484477778-3b0a995d4b3e?q=80&w=881&auto=format&fit=crop",
            nome: "Presunto Cozido",
            categoria: "Frios",
            estoque: 65,
            vencimento: "15/11/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1604908176997-43f89dfc3cf7?q=80&w=881&auto=format&fit=crop",
            nome: "Azeite Extra Virgem",
            categoria: "Condimento",
            estoque: 110,
            vencimento: "20/12/2027",
            status: "Ativo",
        },
    ];

    const buscarProdutoInputRef = useRef(null);

    // Select Categoria
        const [selectedOptionCategoria, setSelectedOptionCategoria] = useState(null);
        const [isCategoriaOpen, setIsCategoriaOpen] = useState(false);

        const optionsCategoria = ["Fruta", "Legume", "Verdura", "Laticínio", "Grão", "Padaria", "Bebida", "Frios", "Massa", "Molho", "Snack", "Condimento"];

        const handleSelectCategoria = (option) => {
            setSelectedOptionCategoria(option);
            setIsCategoriaOpen(false);
        }
    
    // Select Status
        const [selectedOptionStatus, setSelectedOptionStatus] = useState(null);
        const [isStatusOpen, setIsStatusOpen] = useState(false);

        const optionsStatus = ["Ativo", "Inativo"];

        const handleSelectStatus = (option) => {
            setSelectedOptionStatus(option);
            setIsStatusOpen(false);
        }

    // Paginação
        const [currentPage, setCurrentPage] = useState(1);
        const productsPerPage = 15;

        const ultimoProduto = currentPage * productsPerPage;
        const primeiroProduto = ultimoProduto - productsPerPage;
        const currentProducts = produtosDoVendedor.slice(primeiroProduto, ultimoProduto);

        const totalPages = Math.ceil(produtosDoVendedor.length / productsPerPage);

    return (
        <>
            <main className="main-meus-produtos">
                <SidebarDashboard />
                <div className="meus-produtos-content">
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
                                    <button className="adicionar-produto">
                                        <FaPlus /> Adicionar produto
                                    </button>
                                </div>

                                <div className="filtros-meus-produtos">
                                    <div className="buscar-produto-wrapper" onClick={() => buscarProdutoInputRef.current.focus()}>
                                        <FaSearch />
                                        <input
                                            ref={buscarProdutoInputRef}
                                            type="text"
                                            placeholder="Buscar produto"
                                        />
                                    </div>

                                    <div className="custom-select-meus-produtos">
                                        <div className="custom-select-selected-meus-produtos" onClick={() => setIsCategoriaOpen(!isCategoriaOpen)}>
                                            {selectedOptionCategoria || "Categoria"}
                                        </div>
                                        {isCategoriaOpen && (
                                            <div className="custom-select-options-meus-produtos">
                                                {optionsCategoria.map((option, index) => (
                                                    <div
                                                        key={index}
                                                        className="custom-select-option-meus-produtos"
                                                        onClick={() => handleSelectCategoria(option)}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="custom-select-meus-produtos">
                                        <div className="custom-select-selected-meus-produtos" onClick={() => setIsStatusOpen(!isStatusOpen)}>
                                            {selectedOptionStatus || "Status"}
                                        </div>
                                        {isStatusOpen && (
                                            <div className="custom-select-options-meus-produtos">
                                                {optionsStatus.map((option, index) => (
                                                    <div
                                                        key={index}
                                                        className="custom-select-option-meus-produtos"
                                                        onClick={() => handleSelectStatus(option)}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="grid-produtos">
                                {currentProducts.map((produto, index) => (
                                    <CardProdutoGerenciamento produto={produto} key={index} />
                                ))}
                            </div>

                            <nav className="footer-gerenciamento-produtos">
                                <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                                    <FaAngleLeft />
                                </button>
                                <div className="numeros-da-pagina-btn">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={currentPage === i + 1 ? "active" : ""}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
                                    <FaAngleRight />
                                </button>
                            </nav>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}