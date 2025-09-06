import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./styles.css";

export default function LoginERegistro() {
  
  const [abaAtiva, setAbaAtiva] = useState("login");

  return (
    <>
      <Header />
      <main className="login-page">
        <div className="login-card">
          <div className="login-card__header">
            <h1>FeiraOnline</h1>
            <p>Acesse sua conta ou cadastre-se</p>
          </div>

          
          <div className="login-card__tabs">
            <button
              className={`tab-button ${abaAtiva === 'login' ? 'tab-button--active' : ''}`}
              onClick={() => setAbaAtiva("login")}
            >
              Login
            </button>
            <button
              className={`tab-button ${abaAtiva === 'cadastro' ? 'tab-button--active' : ''}`}
              onClick={() => setAbaAtiva("cadastro")}
            >
              Cadastrar
            </button>
          </div>

          
          {abaAtiva === "login" && (
            <form className="login-form">
              <div className="form-field">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="login-password">Senha</label>
                <input
                  type="password"
                  id="login-password"
                  required
                  placeholder="••••••••"
                />
                <a href="#" className="form-link">
                  Esqueci minha senha
                </a>
              </div>

              <button type="submit" className="submit-button">
                Entrar
              </button>

              <div className="form-switch-text">
                Não tem uma conta?{" "}
                <button
                  type="button"
                  className="switch-button"
                  onClick={() => setAbaAtiva("cadastro")}
                >
                  Cadastre-se
                </button>
              </div>
            </form>
          )}

          
          {abaAtiva === "cadastro" && (
            <form className="login-form">
              <div className="form-field">
                <label htmlFor="register-name">Nome completo</label>
                <input
                  type="text"
                  id="register-name"
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-field">
                <label htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="register-password">Crie uma senha</label>
                <input
                  type="password"
                  id="register-password"
                  required
                  placeholder="••••••••"
                />
                <p className="form-hint">Use pelo menos 8 caracteres</p>
              </div>

              <button type="submit" className="submit-button">
                Criar Conta
              </button>

              <div className="form-switch-text">
                Já tem uma conta?{" "}
                <button
                  type="button"
                  className="switch-button"
                  onClick={() => setAbaAtiva("login")}
                >
                  Faça login
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}