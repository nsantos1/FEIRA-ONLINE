export default function CardIntegrante({ link, foto, nome }) {
  return (
    <div className="card-integrante">
      <a href={link} target="_blank">
        <img src={foto} alt="" />
        <p>{nome}</p>
      </a>
    </div>
  );
}
