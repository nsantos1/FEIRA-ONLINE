import "./App.css";
import Rotas from "./rotas.jsx";
import { CarrinhoProvider } from "./contexts/carrinhoContext";

function App() {
  return (
    <CarrinhoProvider>
      <Rotas />
    </CarrinhoProvider>
  );
}

export default App;