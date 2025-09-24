import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roles }) {
    {/*
        Uso no rotas.jsx:
        <Route
            path="/pagina"
            element={
                <ProtectedRoute roles={["role1", "role2"]}>
                    <Pagina />
                </ProtectedRoute>
            }
        />
        */}
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    // Verifica se o usuário está logado
    if (!loggedUser) {
        return <Navigate to="/logineregistro" replace />;
    }

    // Verifica se a rota exige um role e se o usuário tem o role necessário
    if (roles && !roles.includes(loggedUser.role)) {
        alert("Você não tem permissão para acessar essa página.")
        return <Navigate to="/logineregistro" replace />
    }

    return children;
}