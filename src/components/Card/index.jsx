import styles from './Card.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Card({ title, cover}) {
  return (
    <div className={styles.container}>
        <img src={cover} alt={title} className={styles.cover} />
        <div className={styles.card__info}>
            <h2>{title}</h2>
            <AiOutlineHeart className={styles.favorite} alt="Favoritar banda" />
        </div>
    </div>
  )
}
