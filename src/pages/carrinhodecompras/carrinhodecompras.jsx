import './style.css';
import React, { useMemo } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useCarrinho } from '../../contexts/carrinhoContext';
import todosProdutos from "../../data/produtos"; 

const ProdutoCard = React.memo(({ produto, onAdicionar, desabilitado }) => (
  <div className="product-card">
    <img src={produto.imagem} alt={produto.nome} className="product-card__image" />
    <h4 className="product-card__name">{produto.nome}</h4>
    <p className="preco-produto">R$ {produto.preco.toFixed(2)}</p>
    <button
      className="botao-verde"
      onClick={() => onAdicionar(produto)}
      disabled={desabilitado}
    >
      <i className="fas fa-cart-plus"></i> Adicionar
    </button>
  </div>
));


const CarrinhoDeCompras = () => {
  const { 
    carrinho, 
    total, 
    adicionarAoCarrinho, 
    removerDoCarrinho, 
    alterarQuantidade 
  } = useCarrinho();
  
  const getItemEstoque = (id) => {
    const produto = todosProdutos.find(p => p.id === id);
    return produto ? produto.estoque : 0;
  };

  const produtosPorCategoria = useMemo(() => {
    return todosProdutos.reduce((acc, produto) => {
      if (!acc[produto.categoria]) acc[produto.categoria] = [];
      acc[produto.categoria].push(produto);
      return acc;
    }, {});
  }, []);
  

  return (
    <>
      <Header />
      <main className="cart-page">
        <div className="cart-page__container">
          <div className="cart-page__header">
            <h1>Carrinho de Compras</h1>
          </div>

          {carrinho.length === 0 ? (
            <div className="cart-empty">
              <i className="fas fa-shopping-cart cart-empty__icon"></i>
              <h2 className="cart-empty__title">Seu carrinho está vazio.</h2>
              <p className="cart-empty__text">Que tal adicionar alguns produtos frescos?</p>
            </div>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {carrinho.map(item => {
                  const estoque = getItemEstoque(item.id);
                  return (
                  <div key={item.id} className="cart-item">
                    <img src={item.imagem} alt={item.nome} className="cart-item__image" />
                    <div className="cart-item__details">
                      <h3>{item.nome}</h3>
                      <p>Preço Unitário: R$ {item.preco.toFixed(2)}</p>
                    </div>
                    <div className="ajustador-quantidade">
                      <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)} disabled={item.quantidade <= 1}>
                        <i className="fas fa-minus"></i>
                      </button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)} disabled={item.quantidade >= estoque} className=''>
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="cart-item__subtotal">
                      <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                    </div>
                    <button className="cart-item__remove" onClick={() => removerDoCarrinho(item.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                )})}
              </div>

              <div className="resumo-pedido">
                <h2>Resumo do Pedido</h2>
                <div className="total-pedido">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <button className="cart-summary__checkout-button">Finalizar Compra</button>
              </div>
            </div>
          )}

          <div className="available-products">
            <h2>Continue Comprando</h2>
            {Object.entries(produtosPorCategoria).map(([categoria, produtosCategoria]) => (
              <section key={categoria} className="product-category">
                <h3>{categoria}</h3>
                <div className="product-grid">
                  {produtosCategoria.map(produto => (
                    <ProdutoCard
                      key={produto.id}
                      produto={produto}
                      onAdicionar={adicionarAoCarrinho}
                      desabilitado={carrinho.some(item => item.id === produto.id && item.quantidade >= getItemEstoque(item.id))}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CarrinhoDeCompras;