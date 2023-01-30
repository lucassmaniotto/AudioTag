import { createContext, useContext } from "react";

import useStorage from "hooks/useStorage";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useStorage("favorite", []);

    return (
        <FavoritesContext.Provider
        value={{favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const {favorite, setFavorite} = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const repeatedFavorite = favorite.some(item => item.id === newFavorite.id);
        let newList = [...favorite];

        if (!repeatedFavorite) {
            newList.push(newFavorite);
            localStorage.setItem("favorite", JSON.stringify(newList));
            return setFavorite(newList);
        }

        newList.splice(
            newList.findIndex(item => item.id === newFavorite.id), 1
        );
        localStorage.setItem("favorite", JSON.stringify(newList));
        return setFavorite(newList);
    }

    return {
        favorite, 
        addFavorite
    };
}