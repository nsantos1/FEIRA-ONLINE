import './style.css';
import React, { useState, useReducer, useMemo, useCallback, memo } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


const produtos = [
  
  { id: 1, nome: "Maçã Verde", preco: 3.50, imagem: "https://cdn.pixabay.com/photo/2013/11/20/22/59/green-214134_1280.jpg", estoque: 20, categoria: "Frutas" },
  { id: 2, nome: "Banana Nanica", preco: 4.99, imagem: "https://cdn.pixabay.com/photo/2014/04/16/09/58/banana-325461_1280.jpg", estoque: 15, categoria: "Frutas" },
  { id: 3, nome: "Laranja Pera", preco: 2.99, imagem: "https://cdn.pixabay.com/photo/2016/09/05/19/44/grapefruit-1647507_1280.jpg", estoque: 25, categoria: "Frutas" },
  { id: 4, nome: "Mamão Papaya", preco: 6.50, imagem: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=387&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 12, categoria: "Frutas" },
  { id: 5, nome: "Abacaxi", preco: 7.90, imagem: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 8, categoria: "Frutas" },
  { id: 6, nome: "Uva Thompson", preco: 9.90, imagem: "https://images.unsplash.com/photo-1609784431304-8144b5a5f017?q=80&w=387&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 18, categoria: "Frutas" },
  
  
  { id: 11, nome: "Alface Crespa", preco: 2.99, imagem: "https://images.unsplash.com/photo-1515356956468-873dd257f911?q=80&w=1074&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 10, categoria: "Verduras" },
  { id: 12, nome: "Rúcula", preco: 3.50, imagem: "https://plus.unsplash.com/premium_photo-1673469222859-7c716f646c13?q=80&w=435&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 15, categoria: "Verduras" },
  { id: 13, nome: "Espinafre", preco: 4.20, imagem: "https://images.unsplash.com/photo-1580910365203-91ea9115a319?q=80&w=870&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 12, categoria: "Verduras" },
  { id: 14, nome: "Couve", preco: 3.80, imagem: "https://images.unsplash.com/photo-1486328228599-85db4443971f?q=80&w=870&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 18, categoria: "Verduras" },
  { id: 15, nome: "Agrião", preco: 3.20, imagem: "https://images.unsplash.com/photo-1617027090002-39148f0f6d03?q=80&w=387&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", estoque: 14, categoria: "Verduras" },
  { id: 18, nome: "Salsinha", preco: 1.90, imagem: "https://cdn.pixabay.com/photo/2018/04/17/11/53/parsley-leaves-3327372_1280.jpg", estoque: 20, categoria: "Verduras" },

  
  { id: 21, nome: "Tomate", preco: 5.99, imagem: "https://cdn.pixabay.com/photo/2016/10/26/20/08/vegetables-1772527_1280.jpg", estoque: 18, categoria: "Legumes" },
  { id: 22, nome: "Cenoura", preco: 3.20, imagem: "https://cdn.pixabay.com/photo/2016/08/03/01/09/carrot-1565597_1280.jpg", estoque: 22, categoria: "Legumes" },
  { id: 23, nome: "Batata", preco: 4.50, imagem: "https://cdn.pixabay.com/photo/2016/08/11/08/37/potatoes-1585057_1280.jpg", estoque: 25, categoria: "Legumes" },
  { id: 24, nome: "Cebola", preco: 3.80, imagem: "https://cdn.pixabay.com/photo/2022/10/28/20/33/onion-7553931_1280.jpg", estoque: 20, categoria: "Legumes" },
  { id: 25, nome: "Abóbora", preco: 6.90, imagem: "https://cdn.pixabay.com/photo/2022/10/03/15/07/pumpkin-7496159_1280.jpg", estoque: 10, categoria: "Legumes" },
  { id: 28, nome: "Pepino", preco: 3.40, imagem: "https://cdn.pixabay.com/photo/2019/07/03/11/41/cucumber-4314342_1280.jpg", estoque: 16, categoria: "Legumes" },
];


const carrinhoReducer = (state, action) => {
  switch (action.type) {
    case "ADICIONAR":
      const itemExistente = state.find(item => item.id === action.produto.id);
      if (itemExistente) {
        if (itemExistente.quantidade < action.produto.estoque) {
          return state.map(item =>
            item.id === action.produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          );
        }
        return state;
      }
      return [...state, { ...action.produto, quantidade: 1 }];
    case "REMOVER":
      return state.filter(item => item.id !== action.id);
    case "ALTERAR_QTD":
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantidade: Math.min(Math.max(action.qtd, 1), action.estoque) }
          : item
      );
    default:
      return state;
  }
};


const ProdutoCard = memo(({ produto, onAdicionar, desabilitado }) => (
  <div className="product-card">
    <img src={produto.imagem} alt={produto.nome} className="product-card__image" />
    <h4 className="product-card__name">{produto.nome}</h4>
    <p className="product-card__price">R$ {produto.preco.toFixed(2)}</p>
    <button
      className="product-card__button"
      onClick={() => onAdicionar(produto)}
      disabled={desabilitado}
    >
      <i className="fas fa-cart-plus"></i> Adicionar
    </button>
  </div>
));


const CarrinhoDeCompras = () => {
  const [listaProdutos] = useState(produtos);
  const [carrinho, dispatch] = useReducer(carrinhoReducer, []);

  const adicionarAoCarrinho = useCallback((produto) => dispatch({ type: "ADICIONAR", produto }), []);
  const removerDoCarrinho = useCallback((id) => dispatch({ type: "REMOVER", id }), []);
  const alterarQuantidade = useCallback((id, qtd, estoque) => dispatch({ type: "ALTERAR_QTD", id, qtd, estoque }), []);

  const total = useMemo(() => carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0), [carrinho]);

  const produtosPorCategoria = useMemo(() => {
    return listaProdutos.reduce((acc, produto) => {
      if (!acc[produto.categoria]) acc[produto.categoria] = [];
      acc[produto.categoria].push(produto);
      return acc;
    }, {});
  }, [listaProdutos]);

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
                {carrinho.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.imagem} alt={item.nome} className="cart-item__image" />
                    <div className="cart-item__details">
                      <h3>{item.nome}</h3>
                      <p>R$ {item.preco.toFixed(2)}</p>
                    </div>
                    <div className="cart-item__quantity">
                      <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1, item.estoque)} disabled={item.quantidade <= 1}>
                        <i className="fas fa-minus"></i>
                      </button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1, item.estoque)} disabled={item.quantidade >= item.estoque}>
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
                ))}
              </div>

              <div className="cart-summary">
                <h2>Resumo do Pedido</h2>
                <div className="cart-summary__total">
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
                      desabilitado={carrinho.some(item => item.id === produto.id && item.quantidade >= produto.estoque)}
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