import { useState, useEffect } from "react";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favs);
  }, []);

  const favoritarItem = (id) => {
    let atualizados;
    if (favoritos.includes(id)) {
      atualizados = favoritos.filter((fav) => fav !== id);
    } else {
      atualizados = [...favoritos, id];
    }
    setFavoritos(atualizados);
    localStorage.setItem("favoritos", JSON.stringify(atualizados));
  };

  return { favoritos, favoritarItem };
}
