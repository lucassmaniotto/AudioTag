import styles from './Card.module.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useFavoriteContext } from 'context/Favorites';

export default function Card({ id, title, cover }) {

  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);

  return (
    <div className={styles.container}>
        <img src={cover} alt={title} className={styles.cover} />
        <div className={styles.card__info}>
            <h2>{title}</h2>
            {isFavorite ? (
              <AiFillHeart
                className={styles.favorite} 
                alt="Favoritar banda" 
                onClick={() => addFavorite({ id, title, cover })}
              />
            ) : (
              <AiOutlineHeart
                className={styles.favorite} 
                alt="Favoritar banda" 
                onClick={() => addFavorite({ id, title, cover })}
              />
            )}
        </div>
    </div>
  )
}