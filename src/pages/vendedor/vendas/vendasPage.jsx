import React, { useState, useMemo } from 'react';
import SidebarDashboard from '../../../components/vendedor/sidebarDashboardVendedor/sidebarDashboard';
import { FaFilter, FaFileCsv, FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import './vendas.css';

// Dados fictícios de transações (mantive os dados originais)
const transacoesData = [
    { id: '#1001', data: '2025-07-26', cliente: 'Ana Souza', produto: 'Banana Prata (Kg)', qtd: 5, valor: 49.50, status: 'Entregue', metodo: 'Pix' },
    { id: '#1002', data: '2025-07-26', cliente: 'Bruno Lima', produto: 'Alface Crespa (Un)', qtd: 3, valor: 10.50, status: 'Em Separação', metodo: 'Cartão' },
    { id: '#1003', data: '2025-07-25', cliente: 'Carla Dantas', produto: 'Maçã Gala (Kg)', qtd: 10, valor: 119.00, status: 'Cancelado', metodo: 'Boleto' },
    { id: '#1004', data: '2025-07-25', cliente: 'David Ferreira', produto: 'Tomate Italiano (Kg)', qtd: 8, valor: 62.40, status: 'Em Transporte', metodo: 'Pix' },
    { id: '#1005', data: '2025-07-24', cliente: 'Eduardo Gomes', produto: 'Batata Inglesa (Kg)', qtd: 20, valor: 104.00, status: 'Entregue', metodo: 'Cartão' },
    { id: '#1006', data: '2025-07-24', cliente: 'Fabiana Rios', produto: 'Limão Tahiti (Kg)', qtd: 4, valor: 16.80, status: 'Entregue', metodo: 'Pix' },
    { id: '#1007', data: '2025-07-23', cliente: 'Gustavo Santos', produto: 'Cenoura (Kg)', qtd: 12, valor: 54.00, status: 'Em Separação', metodo: 'Cartão' },
    { id: '#1008', data: '2025-07-23', cliente: 'Helena Costa', produto: 'Abacate (Un)', qtd: 5, valor: 27.50, status: 'Entregue', metodo: 'Boleto' },
    { id: '#1009', data: '2025-07-22', cliente: 'Igor Almeida', produto: 'Ovos Orgânicos (Dz)', qtd: 2, valor: 36.00, status: 'Em Transporte', metodo: 'Pix' },
    { id: '#1010', data: '2025-07-22', cliente: 'Júlia Lopes', produto: 'Pão Francês (Un)', qtd: 15, valor: 18.00, status: 'Entregue', metodo: 'Cartão' },
];

const statusMap = {
    'Entregue': 'status-verde',
    'Em Transporte': 'status-azul',
    'Em Separação': 'status-amarelo',
    'Cancelado': 'status-vermelho',
};

const formatarMoeda = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

function VendasPage() {
    const [filtroStatus, setFiltroStatus] = useState('Todos');
    const [ordem, setOrdem] = useState({ campo: 'data', direcao: 'desc' });
    const [termoBusca, setTermoBusca] = useState('');

    const transacoesFiltradas = useMemo(() => {
        let filtradas = transacoesData;

        // 1. Filtrar por Status
        if (filtroStatus !== 'Todos') {
            filtradas = filtradas.filter(t => t.status === filtroStatus);
        }

        // 2. Filtrar por Busca
        if (termoBusca) {
            const buscaNormalizada = termoBusca.toLowerCase();
            filtradas = filtradas.filter(t => 
                t.cliente.toLowerCase().includes(buscaNormalizada) ||
                t.produto.toLowerCase().includes(buscaNormalizada) ||
                t.id.toLowerCase().includes(buscaNormalizada)
            );
        }

        // 3. Ordenar
        return filtradas.sort((a, b) => {
            let aVal, bVal;

            if (ordem.campo === 'data') {
                // Conversão de data AAAA-MM-DD para comparação
                aVal = new Date(a.data);
                bVal = new Date(b.data);
            } else if (ordem.campo === 'valor' || ordem.campo === 'qtd') {
                // Comparação numérica para valor e quantidade
                aVal = a[ordem.campo];
                bVal = b[ordem.campo];
            } else {
                // Comparação de string para outros campos
                aVal = String(a[ordem.campo]).toLowerCase();
                bVal = String(b[ordem.campo]).toLowerCase();
            }

            if (aVal < bVal) return ordem.direcao === 'asc' ? -1 : 1;
            if (aVal > bVal) return ordem.direcao === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filtroStatus, ordem, termoBusca]);
    
    const handleSort = (campo) => {
        setOrdem(prev => ({
            campo,
            direcao: prev.campo === campo && prev.direcao === 'desc' ? 'asc' : 'desc',
        }));
    };

    const SortIcon = ({ campo }) => {
        if (ordem.campo !== campo) {
            return <FaSort className="sort-icon inactive" />;
        }
        return ordem.direcao === 'asc' 
            ? <FaSortUp className="sort-icon active" /> 
            : <FaSortDown className="sort-icon active" />;
    };

    return (
        <main className="main-vendas-page">
            <SidebarDashboard />
            <div className="vendas-content">
                <header className="vendas-header">
                    <h1>Histórico de Vendas e Transações</h1>
                    <div className="vendas-acoes-header">
                        <button className="btn-exportar">
                            <FaFileCsv /> Exportar CSV
                        </button>
                    </div>
                </header>

                <section className="vendas-filtros">
                    <div className="busca-transacao">
                        <input
                            type="text"
                            placeholder="Buscar por ID, Cliente ou Produto..."
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                        />
                    </div>
                    
                    <div className="filtro-status-wrapper">
                         <FaFilter className="filtro-icon" />
                        <select 
                            value={filtroStatus} 
                            onChange={(e) => setFiltroStatus(e.target.value)}
                        >
                            <option value="Todos">Todos os Status</option>
                            <option value="Entregue">Entregue</option>
                            <option value="Em Transporte">Em Transporte</option>
                            <option value="Em Separação">Em Separação</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                    </div>
                </section>

                <section className="tabela-transacoes-container">
                    <div className="tabela-scroll">
                        <table className="tabela-transacoes">
                            <thead>
                                <tr>
                                    <th className="th-sortable" onClick={() => handleSort('id')}>
                                        ID <SortIcon campo="id" />
                                    </th>
                                    <th className="th-sortable" onClick={() => handleSort('data')}>
                                        Data <SortIcon campo="data" />
                                    </th>
                                    <th className="th-sortable" onClick={() => handleSort('cliente')}>
                                        Cliente <SortIcon campo="cliente" />
                                    </th>
                                    <th className="th-sortable" onClick={() => handleSort('produto')}>
                                        Produto <SortIcon campo="produto" />
                                    </th>
                                    <th className="th-sortable" onClick={() => handleSort('qtd')}>
                                        Qtd <SortIcon campo="qtd" />
                                    </th>
                                    <th className="th-sortable" onClick={() => handleSort('metodo')}>
                                        Método Pgto <SortIcon campo="metodo" />
                                    </th>
                                    <th className="th-sortable" onClick={() => handleSort('valor')}>
                                        Valor Total <SortIcon campo="valor" />
                                    </th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transacoesFiltradas.length > 0 ? (
                                    transacoesFiltradas.map(transacao => (
                                        <tr key={transacao.id}>
                                            <td className="transacao-id">{transacao.id}</td>
                                            <td>{transacao.data}</td>
                                            <td className="cliente-nome">{transacao.cliente}</td>
                                            <td className="produto-nome">{transacao.produto}</td>
                                            <td>{transacao.qtd}</td>
                                            <td>{transacao.metodo}</td>
                                            <td className="valor-total">{formatarMoeda(transacao.valor)}</td>
                                            <td>
                                                <span className={`status-badge ${statusMap[transacao.status]}`}>
                                                    {transacao.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="sem-transacoes">
                                            Nenhuma transação encontrada com os filtros atuais.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                {transacoesFiltradas.length > 0 && (
                    <div className="vendas-footer">
                        <p>Total de {transacoesFiltradas.length} {transacoesFiltradas.length === 1 ? 'transação' : 'transações'} exibidas.</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default VendasPage;
