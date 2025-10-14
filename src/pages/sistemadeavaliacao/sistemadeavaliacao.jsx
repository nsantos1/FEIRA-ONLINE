import React, { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import produtos from "../../data/produtos.js"; 

// Este componente agora apenas redireciona para a nova URL da página de detalhes
export default function SistemaDeAvaliacao() {
  const { id } = useParams();
  
  // Apenas verifica se o produto existe para não redirecionar para um link inválido
  const produtoExiste = useMemo(() => produtos.some((p) => String(p.id) === String(id)), [id]);

  // Se o produto existir, redireciona para a página de detalhes, que agora contém as avaliações
  if (produtoExiste) {
      // Usamos a função navigate para ir para a página de detalhes do produto
      // A seção de avaliações deve ser aberta pelo usuário lá.
      return <Navigate to={`/produto/${id}`} replace />;
  }

  // Se o produto não existir, renderiza um erro
  return (
    <div>
      <h1>Erro 404</h1>
      <p>Página de avaliação não encontrada ou produto não existe.</p>
    </div>
  );
}