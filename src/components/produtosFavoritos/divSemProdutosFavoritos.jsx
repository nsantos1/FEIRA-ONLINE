export default function SemProdutosFavoritos() {
  return (
    <div className="sem-produtos-favoritos">
      <i>
        <i className="fa-solid fa-heart-crack"></i>
      </i>
      <h2>Opa!</h2>
      <h3>
        Parece que você ainda não favoritou <br />
        nenhum produto.
      </h3>
      <span>
        Mas fique tranquilo, você só precisar clicar no botão de coração
        <br />
        em algum produto para favoritá-lo.
      </span>
      <a href="#">VOLTAR PARA A PÁGINA DE PRODUTOS</a>
    </div>
  );
}
