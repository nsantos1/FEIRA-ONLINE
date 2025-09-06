import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <ul>
            <li>
              <h3>FeiraOnline</h3>
            </li>
            <li>
              <Link to="/sobre">Sobre nós</Link>
            </li>
            <li>
              <Link to="/logineregistro">Seja um vendedor</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Nos deixe te ajudar</h3>
            </li>
            <li>
              <Link to="/contato">Entre em contato</Link>
            </li>
            <li>
              <a href="#">Termos e condições</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Redes sociais</h3>
            </li>
            <div className="social">
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
