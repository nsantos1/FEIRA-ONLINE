import React from 'react';
import SidebarDashboard from '../../../components/vendedor/sidebarDashboardVendedor/sidebarDashboard';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './dashboard.css';
import { FaDollarSign, FaBoxOpen, FaStar, FaStore } from 'react-icons/fa';

// --- Componente de Cartão KPI reutilizado ---
const KpiCard = ({ title, value, unit, percentage, icon: Icon, color }) => {
    const isPositive = percentage >= 0;
    const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
    const changeIcon = isPositive ? '▲' : '▼';

    return (
        <div className="kpi-card" style={{ '--kpi-color': color }}>
            <div className="kpi-icon-wrapper">
                {Icon && <Icon className="kpi-icon" />}
            </div>
            <div className="kpi-info">
                <p className="kpi-title">{title}</p>
                <div className="kpi-value-row">
                    <span className="kpi-value">{value}</span>
                    <span className="kpi-unit">{unit}</span>
                </div>
            </div>
            {percentage !== undefined && (
                <div className={`kpi-change ${changeColor}`}>
                    {changeIcon} {Math.abs(percentage)}%
                    <span className='kpi-change-period'> vs mês anterior</span>
                </div>
            )}
        </div>
    );
};

// --- Dados Fictícios para o Vendedor ---

const kpisData = [
    { title: "Vendas Totais (Mês)", value: "R$ 7.500", unit: "", percentage: 12, icon: FaDollarSign, color: '#078C00' },
    { title: "Pedidos Processados", value: "155", unit: "un", percentage: 5, icon: FaBoxOpen, color: '#4CAF50' },
    { title: "Avaliação Média", value: "4.8", unit: "/5", percentage: 2, icon: FaStar, color: '#FFC107' },
    { title: "Produtos Ativos", value: "32", unit: "SKUs", percentage: 0, icon: FaStore, color: '#3182CE' },
];

const vendasPorCategoriaData = [
    { name: 'Frutas', vendas: 4500 },
    { name: 'Verduras', vendas: 2200 },
    { name: 'Padaria', vendas: 800 },
    { name: 'Laticínios', vendas: 1500 },
];

const vendasMensaisData = [
    { name: 'Jan', R$: 2500 }, { name: 'Fev', R$: 3200 }, { name: 'Mar', R$: 4100 },
    { name: 'Abr', R$: 4800 }, { name: 'Mai', R$: 5500 }, { name: 'Jun', R$: 6200 },
    { name: 'Jul', R$: 7500 },
];

const topProdutosData = [
    { name: 'Banana Prata (Kg)', vendas: 980 },
    { name: 'Maçã Gala (Kg)', vendas: 720 },
    { name: 'Alface Crespa', vendas: 550 },
    { name: 'Pão Francês', vendas: 410 },
    { name: 'Limão Tahiti (Kg)', vendas: 390 },
];

const COLORS = ['#078C00', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B']; // Tons de verde e amarelo

function DashboardPage() {
    return (
        <main className="main-dashboard-kpi">
            <SidebarDashboard />
            <div className="dashboard-kpi-content">
                <header className="dashboard-header">
                    <h1>Dashboard do Vendedor</h1>
                    <div className="dashboard-filters">
                        <select name="periodo">
                            <option value="" disabled>Período</option>
                            <option value="mes">Mês Atual</option>
                            <option value="trimestre">Último Trimestre</option>
                            <option value="semestre">Último Semestre</option>
                            <option value="ano">Ano</option>
                        </select>
                        <select name="ano"><option value="">Ano</option></select>
                    </div>
                </header>

                {/* Grid de KPIs */}
                <section className="kpi-grid">
                    {kpisData.map((kpi, index) => (
                        <KpiCard key={index} {...kpi} />
                    ))}
                </section>

                {/* Grid de Gráficos */}
                <section className="charts-grid">
                    <div className="chart-container full-width"><h3>Evolução das Vendas (R$)</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={vendasMensaisData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" stroke="#4b5563" />
                                <YAxis 
                                    stroke="#4b5563" 
                                    tickFormatter={(value) => `R$ ${value / 1000}K`}
                                    domain={['dataMin', 'dataMax + 1000']} 
                                />
                                <Tooltip 
                                    formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                                    labelFormatter={(label) => `Mês: ${label}`}
                                />
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px' }} />
                                <Line type="monotone" dataKey="R$" stroke="#078C00" strokeWidth={3} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-container" style={{ gridColumn: 'span 1' }}><h3>Vendas por Categoria</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie 
                                    data={vendasPorCategoriaData} 
                                    dataKey="vendas" 
                                    nameKey="name"
                                    cx="50%" 
                                    cy="50%" 
                                    outerRadius={80} 
                                    fill="#8884d8" 
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {vendasPorCategoriaData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                                </Pie>
                                <Tooltip 
                                    formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Vendas']}
                                    labelFormatter={(label) => `Categoria: ${label}`}
                                />
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-container" style={{ gridColumn: 'span 2' }}><h3>Top 5 Produtos por Volume de Vendas</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={topProdutosData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" angle={-30} textAnchor="end" height={50} interval={0} stroke="#4b5563" style={{ fontSize: '10px' }} />
                                <YAxis stroke="#4b5563" />
                                <Tooltip 
                                    formatter={(value) => [value.toLocaleString('pt-BR'), 'Unidades Vendidas']}
                                    labelFormatter={(label) => `Produto: ${label}`}
                                />
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px' }}/>
                                <Bar dataKey="vendas" fill="#4CAF50" name="Unidades Vendidas" radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </section>

                {/* Tabela de Atividades Recentes (Pedidos) */}
                <section className="recent-activities-container">
                    <h3>Últimos Pedidos</h3>
                    <table className="activities-table">
                        <thead>
                            <tr>
                                <th>ID Pedido</th>
                                <th>Cliente</th>
                                <th>Produto Principal</th>
                                <th>Valor Total</th>
                                <th>Status</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="1">
                                <td>#PED-9001</td>
                                <td>Ana Souza</td>
                                <td>Banana Prata</td>
                                <td>R$ 45,90</td>
                                <td><span className="status-badge status-resolvido">Entregue</span></td>
                                <td>26/07/2025</td>
                            </tr>
                            <tr key="2">
                                <td>#PED-9002</td>
                                <td>Bruno Lima</td>
                                <td>Alface Crespa</td>
                                <td>R$ 15,00</td>
                                <td><span className="status-badge status-em-atendimento">Em Separação</span></td>
                                <td>26/07/2025</td>
                            </tr>
                            <tr key="3">
                                <td>#PED-9003</td>
                                <td>Carla Dantas</td>
                                <td>Filé de Salmão</td>
                                <td>R$ 89,99</td>
                                <td><span className="status-badge status-fora-do-prazo">Aguardando Pagamento</span></td>
                                <td>25/07/2025</td>
                            </tr>
                            <tr key="4">
                                <td>#PED-9004</td>
                                <td>David Ferreira</td>
                                <td>Maçã Gala</td>
                                <td>R$ 33,50</td>
                                <td><span className="status-badge status-dentro-do-prazo">Em Transporte</span></td>
                                <td>25/07/2025</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </div>
        </main>
    );
}

export default DashboardPage;
