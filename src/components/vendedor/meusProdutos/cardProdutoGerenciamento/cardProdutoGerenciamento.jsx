import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

import "./CardProdutoGerenciamento.css"

export default function CardProdutoGerenciamento({ produto }) {
    return (
        <div className="produto">
            <div className="header-produto">
                <div className="status">{produto.status}</div>
                <div className="gerenciamento-btns">
                    <button><FaPencilAlt /></button>
                    <button><FaRegTrashAlt /></button>
                </div>
            </div>
            <img src={produto.imagem} alt={`Imagem do produto: ${produto.nome}`} />
            <div className="detalhes-do-produto">
                <h2>{produto.nome}</h2>
                <span>Categoria: {produto.categoria}</span>
                <span>Em estoque: {produto.estoque}</span>
                <span>Data de vencimento: {produto.vencimento}</span>
            </div>
            <button className="atualizar-estoque">Atualizar estoque</button>
        </div>
    )
}