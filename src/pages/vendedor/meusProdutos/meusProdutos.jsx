import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlus, FaSearch } from "react-icons/fa";

import CardProdutoGerenciamento from "../../../components/vendedor/meusProdutos/cardProdutoGerenciamento/cardProdutoGerenciamento";
import SidebarDashboard from "../../../components/vendedor/sidebarDashboardVendedor/sidebarDashboard";
import ModalMeusProdutos from "../../../components/vendedor/meusProdutos/modalMeusProdutos/modalMeusProdutos";

import "./meusProdutos.css"

export default function MeusProdutos() {
    const [produtosDoVendedor, setProdutosDoVendedor] = useState([
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
            imagem: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=886",
            nome: "Tomate Italiano",
            categoria: "Legume",
            estoque: 50,
            vencimento: "10/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1640958904159-51ae08bd3412?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            nome: "Alface Crespa",
            categoria: "Verdura",
            estoque: 25,
            vencimento: "05/11/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=956",
            nome: "Leite Integral",
            categoria: "Laticínio",
            estoque: 200,
            vencimento: "15/01/2026",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1664391870099-a7d4976fd8e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=766",
            nome: "Iogurte Natural",
            categoria: "Laticínio",
            estoque: 60,
            vencimento: "20/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            nome: "Feijão Carioca",
            categoria: "Grão",
            estoque: 300,
            vencimento: "10/08/2026",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1675814316651-3ce3c6409922?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Arroz Branco",
            categoria: "Grão",
            estoque: 500,
            vencimento: "22/09/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1586765501019-cbe3973ef8fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
            nome: "Pão Francês",
            categoria: "Padaria",
            estoque: 40,
            vencimento: "29/10/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1683314573422-649a3c6ad784?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            nome: "Queijo Mussarela",
            categoria: "Laticínio",
            estoque: 75,
            vencimento: "28/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1610219171722-87b3f4170557?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
            nome: "Açúcar Refinado",
            categoria: "Grão",
            estoque: 150,
            vencimento: "18/07/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Café Torrado e Moído",
            categoria: "Bebida",
            estoque: 90,
            vencimento: "05/05/2027",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1700088853545-e6529edb2d25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            nome: "Manteiga com Sal",
            categoria: "Laticínio",
            estoque: 45,
            vencimento: "12/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1629654613528-5d0a2e4166de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
            nome: "Refrigerante Cola",
            categoria: "Bebida",
            estoque: 300,
            vencimento: "01/03/2026",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1724256031338-b5bfba816cfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Batata Inglesa",
            categoria: "Legume",
            estoque: 130,
            vencimento: "25/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Cenoura",
            categoria: "Legume",
            estoque: 100,
            vencimento: "20/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1607756794535-ba48a526b73a?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Presunto Fatiado",
            categoria: "Frios",
            estoque: 70,
            vencimento: "15/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1627286400579-027de47e9e73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Macarrão Espaguete",
            categoria: "Massa",
            estoque: 220,
            vencimento: "08/08/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1565086869529-8c7802cca7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Molho de Tomate",
            categoria: "Molho",
            estoque: 180,
            vencimento: "10/01/2027",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1531257243018-c547a2e35767?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Biscoito Recheado",
            categoria: "Snack",
            estoque: 260,
            vencimento: "30/06/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1585849834908-3481231155e8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Cebola Roxa",
            categoria: "Legume",
            estoque: 90,
            vencimento: "15/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Morango",
            categoria: "Fruta",
            estoque: 60,
            vencimento: "22/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1683314573422-649a3c6ad784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Queijo Prato",
            categoria: "Laticínio",
            estoque: 55,
            vencimento: "10/01/2026",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1724849305147-0294068d1c55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Cenoura Baby",
            categoria: "Legume",
            estoque: 80,
            vencimento: "18/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1724849347739-d791160b10a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Pimentão Vermelho",
            categoria: "Legume",
            estoque: 70,
            vencimento: "20/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Iogurte Grego",
            categoria: "Laticínio",
            estoque: 40,
            vencimento: "05/11/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1486887396153-fa416526c108?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Pão Integral",
            categoria: "Padaria",
            estoque: 50,
            vencimento: "29/10/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1584699006710-3ad3b82fce7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Batata Doce",
            categoria: "Legume",
            estoque: 120,
            vencimento: "25/11/2025",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1700088853545-e6529edb2d25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            nome: "Manteiga Sem Sal",
            categoria: "Laticínio",
            estoque: 35,
            vencimento: "12/12/2025",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Suco de Laranja",
            categoria: "Bebida",
            estoque: 200,
            vencimento: "01/03/2026",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1670895802275-ed748ced4309?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Biscoito Integral",
            categoria: "Snack",
            estoque: 180,
            vencimento: "30/06/2026",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1702323867860-5c3064528a1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Molho Pesto",
            categoria: "Molho",
            estoque: 90,
            vencimento: "10/01/2027",
            status: "Ativo",
        },
        {
            imagem: "https://plus.unsplash.com/premium_photo-1667814373749-80583adf15a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Macarrão Penne",
            categoria: "Massa",
            estoque: 140,
            vencimento: "08/08/2026",
            status: "Ativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Presunto Cozido",
            categoria: "Frios",
            estoque: 65,
            vencimento: "15/11/2025",
            status: "Inativo",
        },
        {
            imagem: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nome: "Azeite Extra Virgem",
            categoria: "Condimento",
            estoque: 110,
            vencimento: "20/12/2027",
            status: "Ativo",
        },
    ]);

    const [isAdicionarProdutoOpen, setIsAdicionarProdutoOpen] = useState(false);

    // Serve para focar no Input quando clicado em qualquer lugar do wrapper
    const buscarProdutoInputRef = useRef(null);

    // UseState da Busca
    const [busca, setBusca] = useState("");

    // Select Categoria
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState(null);
    const [isCategoriaOpen, setIsCategoriaOpen] = useState(false);
    const selectCategoriaRef = useRef(null);

    const optionsCategoria = ["Fruta", "Legume", "Verdura", "Laticínio", "Grão", "Padaria", "Bebida", "Frios", "Massa", "Molho", "Snack", "Condimento"];

    const handleSelectCategoria = (option) => {
        setSelectedOptionCategoria(option);
        setIsCategoriaOpen(false);
    }

    // Select Status
    const [selectedOptionStatus, setSelectedOptionStatus] = useState(null);
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const selectStatusRef = useRef(null);

    const optionsStatus = ["Ativo", "Inativo"];

    const handleSelectStatus = (option) => {
        setSelectedOptionStatus(option);
        setIsStatusOpen(false);
    }

    // Select Adicionar Categoria Modal
    const [selectedOptionCategoriaAdicionar, setSelectedOptionCategoriaAdicionar] = useState(null);
    const [isCategoriaAdicionarOpen, setIsCategoriaAdicionarOpen] = useState(false);
    const selectCategoriaAdicionarRef = useRef(null);

    const optionsCategoriaAdicionar = ["Fruta", "Legume", "Verdura", "Laticínio", "Grão", "Padaria", "Bebida", "Frios", "Massa", "Molho", "Snack", "Condimento"];

    const handleCategoriaAdicionar = (option) => {
        setSelectedOptionCategoriaAdicionar(option);
        setIsCategoriaAdicionarOpen(false);
    }

    // Select Adicionar Status Modal
    const [selectedOptionStatusAdicionar, setSelectedOptionStatusAdicionar] = useState(null);
    const [isStatusAdicionarOpen, setIsStatusAdicionarOpen] = useState(false);
    const selectStatusAdicionarRef = useRef(null);

    const optionsStatusAdicionar = ["Ativo", "Inativo"];

    const handleStatusAdicionar = (option) => {
        setSelectedOptionStatusAdicionar(option);
        setIsStatusAdicionarOpen(false);
    }

    // Preview da Imagem de Adicionar Produto
    const [preview, setPreview] = useState("https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            setImagem(imageUrl);
        }
    }

    // Lida com o Form
    const [nome, setNome] = useState(null);
    const [imagem, setImagem] = useState(null);
    const [estoque, setEstoque] = useState(null);
    const [vencimento, setVencimento] = useState(null);

    function adicionarProduto(e) {
        e.preventDefault();

        if (!nome || !estoque || !vencimento) {
            alert("Preencha todos os campos!");
            return;
        }

        const novoProduto = {
            imagem: imagem,
            nome: nome,
            categoria: selectedOptionCategoriaAdicionar,
            estoque: estoque,
            vencimento: vencimento,
            status: selectedOptionStatusAdicionar,
        };
        console.log(novoProduto);

        setProdutosDoVendedor([...produtosDoVendedor, novoProduto]);

        // Limpa o Form

        // Fecha o Modal
        setIsAdicionarProdutoOpen(false);
    }

    // Fecha os Selects se clicado fora deles
    useEffect(() => {
        function handleClickOutside(event) {
            if (selectCategoriaRef.current && !selectCategoriaRef.current.contains(event.target)) {
                setIsCategoriaOpen(false);
            }
            else if (selectStatusRef.current && !selectStatusRef.current.contains(event.target)) {
                setIsStatusOpen(false);
            }
            else if (selectStatusAdicionarRef.current && !selectStatusAdicionarRef.current.contains(event.target)) {
                setIsStatusOpen(false);
            }
            else if (selectCategoriaAdicionarRef.current && !selectCategoriaAdicionarRef.current.contains(event.target)) {
                setIsCategoriaOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Filtragem
    const produtosFiltrados = produtosDoVendedor.filter((p) => {
        const matchCategoria = selectedOptionCategoria ? p.categoria === selectedOptionCategoria : true;
        const matchStatus = selectedOptionStatus ? p.status === selectedOptionStatus : true;
        const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
        return matchCategoria && matchStatus && matchBusca;
    })

    // Paginação
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;

    const ultimoProduto = currentPage * productsPerPage;
    const primeiroProduto = ultimoProduto - productsPerPage;
    const currentProducts = produtosFiltrados.slice(primeiroProduto, ultimoProduto);

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
                                    <button className="adicionar-produto" onClick={() => setIsAdicionarProdutoOpen(true)}>
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
                                            onChange={(e) => setBusca(e.target.value)}
                                        />
                                    </div>

                                    <div ref={selectCategoriaRef} className="custom-select-meus-produtos">
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

                                    <div ref={selectStatusRef} className="custom-select-meus-produtos">
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
                                {produtosFiltrados.length === 0 && <p>Nenhum produto encontrado.</p>}
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

            {/* Modal Adicionar Produto */}
            <ModalMeusProdutos isOpen={isAdicionarProdutoOpen} onClose={() => setIsAdicionarProdutoOpen(false)}>
                <h2>Adicionar Produto</h2>
                <form onSubmit={adicionarProduto}>
                    <div>
                        <div>
                            <label htmlFor="nome">Título do Produto</label><br />
                            <input type="text" name="nome" id="nome" placeholder="Exs.: Milho, Cenoura, Leite" onChange={(e) => setNome(e.target.value)} />
                            <div ref={selectCategoriaAdicionarRef} className="custom-select-meus-produtos">
                                <div className="custom-select-selected-meus-produtos" onClick={() => setIsCategoriaAdicionarOpen(!isCategoriaAdicionarOpen)}>
                                    {selectedOptionCategoriaAdicionar || "Categoria"}
                                </div>
                                {isCategoriaAdicionarOpen && (
                                    <div className="custom-select-options-meus-produtos">
                                        {optionsCategoriaAdicionar.map((option, index) => (
                                            <div
                                                key={index}
                                                className="custom-select-option-meus-produtos"
                                                onClick={() => handleCategoriaAdicionar(option)}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <label htmlFor="estoque">Estoque</label><br />
                            <input id="estoque" type="number" placeholder="Exs.: 10, 150, 1000" onChange={(e) => setEstoque(e.target.value)} /><br />
                            <label htmlFor="vencimento">Data de Vencimento</label><br />
                            <input type="date" name="vencimento" id="vencimento" onChange={(e) => setVencimento(e.target.value)} /><br />
                            <div ref={selectStatusAdicionarRef} className="custom-select-meus-produtos">
                                <div className="custom-select-selected-meus-produtos" onClick={() => setIsStatusAdicionarOpen(!isStatusAdicionarOpen)}>
                                    {selectedOptionStatusAdicionar || "Status"}
                                </div>
                                {isStatusAdicionarOpen && (
                                    <div className="custom-select-options-meus-produtos">
                                        {optionsStatusAdicionar.map((option, index) => (
                                            <div
                                                key={index}
                                                className="custom-select-option-meus-produtos"
                                                onClick={() => handleStatusAdicionar(option)}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <img className="preview" src={preview} alt="Pré-visualização da Imagem" />
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
            </ModalMeusProdutos>
        </>
    )
}