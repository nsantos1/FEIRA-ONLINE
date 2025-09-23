import { useState } from "react";
import SelectRegisterRole from "./selectRegisterRole";

export default function RegisterForm({ onSubmit, switchForm }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("cliente");
        // Opções de role
        const options = [
            { value: "cliente", label: "Cliente" },
            { value: "vendedor", label: "Vendedor" },
        ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, password, role });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="register-name">Nome completo</label>
                <input
                    type="text"
                    id="register-name"
                    required
                    placeholder="Seu nome completo"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label htmlFor="register-email">Email</label>
                <input
                    type="email"
                    id="register-email"
                    required
                    placeholder="seu@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label htmlFor="register-password">Crie uma senha</label>
                <input
                    type="password"
                    id="register-password"
                    required
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="form-hint">Use pelo menos 8 caracteres</p>
            </div>

            <div className="form-field">
                <SelectRegisterRole options={options} value={role} onChange={setRole} />
            </div>

            <button type="submit" className="submit-button">
                Criar Conta
            </button>

            <div className="form-switch-text">
                Já tem uma conta?{" "}
                <button
                    type="button"
                    className="switch-button"
                    onClick={() => switchForm("login")}
                >
                    Faça login
                </button>
            </div>
        </form>
    )
}