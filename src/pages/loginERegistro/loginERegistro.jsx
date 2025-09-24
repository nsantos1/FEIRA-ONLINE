import { useState } from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import RegisterForm from "../../components/loginERegistro/registerForm";
import LoginForm from "../../components/loginERegistro/loginForm";

import "./styles.css";

export default function LoginERegistro() {

    const [abaAtiva, setAbaAtiva] = useState("login");

    const handleRegister = (dados) => {
        // puxa a lista de usuários em localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // verifica se o email já foi usado
        if (users.some(user => user.email === dados.email)) {
            alert("O e-mail já é cadastrado.");
            return;
        }

        // cadastra o usuário
        users.push(dados);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Cadastro Realizado.")
        setAbaAtiva("login");
    }

    const handleLogin = (dados) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) => u.email === dados.email && u.password === dados.password
        );
        
        // Verifica o Login
        if (!user) {
            alert("Usuário ou senha incorretos!")
            return;
        }

        // Loga o usuário
        localStorage.setItem("loggedUser", JSON.stringify(user));
    }

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

                    {abaAtiva === "login" && <LoginForm onSubmit={handleLogin} switchForm={setAbaAtiva} />}

                    {abaAtiva === "cadastro" && <RegisterForm onSubmit={handleRegister} switchForm={setAbaAtiva}/>}
                </div>
            </main>
            <Footer />
        </>
    );
}