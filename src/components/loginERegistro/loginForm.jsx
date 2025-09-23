import { useState } from "react"

export default function LoginForm({ onSubmit, switchForm }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="login-email">Email</label>
                <input
                    type="email"
                    id="login-email"
                    required
                    placeholder="seu@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </div>

            <div className="form-field">
                <label htmlFor="login-password">Senha</label>
                <input
                    type="password"
                    id="login-password"
                    required
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
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
                    onClick={() => switchForm("cadastro")}
                >
                    Cadastre-se
                </button>
            </div>
        </form>
    )
}