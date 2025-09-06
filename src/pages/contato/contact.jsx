import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./styles.css";

export default function Contato() {
  return (
    <>
      <Header />
      <div className="contact-page-container">
        <div className="contact-header-section">
          <span className="contact-subtitle">Contate-nos</span>
          <h1 className="contact-title">Você pode nos fazer perguntas</h1>
          <p className="contact-description">
            Contate-nos para todas as suas perguntas e opiniões, ou você pode
            resolver seus problemas em um tempo menor com nossos escritórios de
            contato.
          </p>
        </div>

        <div className="contact-content-wrapper">
          
          <div className="contact-info-section">
            <h2 className="info-title">Nossos Escritórios</h2>
            <p className="info-description">
              A FeiraOnline valoriza o contato direto e transparente. Abaixo estão os detalhes de nossos escritórios, onde nossa equipe trabalha para conectar produtores e consumidores, fortalecendo a agricultura local e promovendo um futuro mais sustentável.
            </p>

            <div className="office-locations">
              <div className="office-card">
                <h3 className="office-name">Escritório Av. Paulista</h3>
                <p>Av. Paulista, 1106 - 7º andar, São Paulo</p>
                <p>(11) 3385-8010</p>
                <a href="mailto:info@feiraonline.com">info@feiraonline.com</a>
              </div>

              <div className="office-card">
                <h3 className="office-name">Escritório Aclimação</h3>
                <p>Av. Lins de Vasconcelos, 1222, São Paulo</p>
                <p>(11) 3385-8010</p>
                <a href="mailto:contact@feiraonline.com">contact@feiraonline.com</a>
              </div>
            </div>

            <div className="contact-social-media">
              <span>Siga-nos</span>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          
          <div className="contact-form-section">
            <p className="form-intro-text">
              Tem alguma dúvida, sugestão ou feedback? Preencha o formulário abaixo e nossa equipe responderá o mais breve possível. Estamos aqui para ajudar!
            </p>
            <form className="contact-form">
              <div className="form-group-inline">
                <div className="form-field">
                  <label htmlFor="name">Seu nome *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Seu email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Assunto *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Sua mensagem</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" className="send-message-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}