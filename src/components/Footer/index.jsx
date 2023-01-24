import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Desevolvido por <a href="https://github.com/lucassmaniotto" target="_blank" className={styles.ancor}>Lucas Smaniotto</a></p>
    </footer>
  )
}
