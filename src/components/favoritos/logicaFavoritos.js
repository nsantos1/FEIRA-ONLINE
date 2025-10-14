import { useState, useEffect, useCallback } from "react";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const storedFavs = localStorage.getItem("favoritos");
      // Certifica que o localStorage retorna um array
      return storedFavs ? JSON.parse(storedFavs) : [];
    } catch (e) {
      console.error("Erro ao carregar favoritos do localStorage", e);
      return [];
    }
  });

  // Salva no localStorage sempre que 'favoritos' muda
  useEffect(() => {
    try {
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } catch (e) {
      console.error("Erro ao salvar favoritos no localStorage", e);
    }
  }, [favoritos]);

  const favoritarItem = useCallback((id) => {
    setFavoritos((prev) => {
      // Se já inclui, remove (desfavorita)
      if (prev.includes(id)) {
        return prev.filter((fav) => fav !== id);
      } else {
        // Se não inclui, adiciona (favorita)
        return [...prev, id];
      }
    });
  }, []);

  return { favoritos, favoritarItem };
}