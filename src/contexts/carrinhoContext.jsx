import React, { createContext, useReducer, useMemo, useContext, useCallback } from "react";
import todosProdutos from "../data/produtos"; 

const CarrinhoContext = createContext();

const carrinhoReducer = (state, action) => {
  const findProductInAll = (id) => todosProdutos.find(p => p.id === id);

  switch (action.type) {
    case "ADICIONAR":
      const produtoCompleto = action.produto;
      const itemExistente = state.find(item => item.id === produtoCompleto.id);
      
      if (itemExistente) {
        if (itemExistente.quantidade < produtoCompleto.estoque) {
          return state.map(item =>
            item.id === produtoCompleto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          );
        }
        return state;
      }
      return [...state, { ...produtoCompleto, quantidade: 1 }];
      
    case "REMOVER":
      return state.filter(item => item.id !== action.id);
      
    case "ALTERAR_QTD":
      const produtoNoEstoque = findProductInAll(action.id);
      const maxEstoque = produtoNoEstoque ? produtoNoEstoque.estoque : Infinity;

      return state.map(item =>
        item.id === action.id
          ? { ...item, quantidade: Math.min(Math.max(action.qtd, 1), maxEstoque) }
          : item
      );
      
    default:
      return state;
  }
};

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
  const initialCarrinho = useMemo(() => {
    try {
      const storedCarrinho = localStorage.getItem("carrinho");
      return storedCarrinho ? JSON.parse(storedCarrinho) : [];
    } catch (e) {
      console.error("Could not load cart from localStorage", e);
      return [];
    }
  }, []);

  const [carrinho, dispatch] = useReducer(carrinhoReducer, initialCarrinho);
  
  React.useEffect(() => {
    try {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    } catch (e) {
      console.error("Could not save cart to localStorage", e);
    }
  }, [carrinho]);

  const adicionarAoCarrinho = useCallback((produto) => {
    dispatch({ type: "ADICIONAR", produto });
  }, []);

  const removerDoCarrinho = useCallback((id) => {
    dispatch({ type: "REMOVER", id });
  }, []);
  
  const alterarQuantidade = useCallback((id, qtd) => {
    dispatch({ type: "ALTERAR_QTD", id, qtd });
  }, []);

  const total = useMemo(() => 
    carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0), 
    [carrinho]
  );
  

  return (
    <CarrinhoContext.Provider 
      value={{ 
        carrinho, 
        total, 
        adicionarAoCarrinho, 
        removerDoCarrinho, 
        alterarQuantidade,
        todosProdutos
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};