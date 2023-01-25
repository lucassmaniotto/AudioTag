import styles from './Title.module.css';

export default function Title({ children }) {
  return (
    <div className={styles.title}>
        {children}
    </div>
  )
}
