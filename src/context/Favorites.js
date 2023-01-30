import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
        value={{favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const {favorite, setFavorite} = useContext(FavoritesContext);
    if (!favorite.length) {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites) setFavorite(favorites);
    }

    function addFavorite(newFavorite) {
        const repeatedFavorite = favorite.some(item => item.id === newFavorite.id);
        let newList = [...favorite];

        if (!repeatedFavorite) {
            newList.push(newFavorite);
            localStorage.setItem('favorites', JSON.stringify(newList));
            return setFavorite(newList);
        }

        newList.splice(
            newList.findIndex(item => item.id === newFavorite.id), 1
        );

        localStorage.setItem('favorites', JSON.stringify(newList));
        return setFavorite(newList);
    }

    return {
        favorite, 
        addFavorite
    };
}