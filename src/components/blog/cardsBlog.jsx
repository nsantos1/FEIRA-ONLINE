export function PostDestaque({ categoria, data, titulo }) {
  return (
    <div className="blog-destaques-item">
      <div className="blog-destaques-item-info">
        <a href="#">{categoria}</a>
        <p>{data}</p>
      </div>
      <div className="blog-destaques-item-titulo">
        <a href="#">{titulo}</a>
      </div>
    </div>
  );
}

export function PostRecenteDestaque({ capa, categoria, data, titulo, resumo }) {
  return (
    <div className="blog-recentes-principal">
      <div>
        <img src={capa} alt="Imagem exemplo" />
      </div>
      <div>
        <div className="blog-recentes-item-info">
          <a href="#">{categoria}</a>
          <p>{data}</p>
        </div>
        <div className="blog-recentes-item-descricao">
          <a href="#">{titulo}</a>
          <p>{resumo}</p>
        </div>
      </div>
    </div>
  );
}

export function CardPostRecente({ capa, categoria, data, titulo, resumo }) {
  return (
    <div className="blog-recentes-card">
      <img src={capa} />
      <div className="blog-recentes-item-info">
        <a href="#">{categoria}</a>
        <p>{data}</p>
      </div>
      <a href="#" className="blog-recentes-card-titulo">
        {titulo}
      </a>
      <p className="blog-recentes-card-descricao">{resumo}</p>
    </div>
  );
}
