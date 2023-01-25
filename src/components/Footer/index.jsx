import styles from './Footer.module.css'
import { AiOutlineTwitter, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Desevolvido por <a href="https://github.com/lucassmaniotto" className={styles.ancor}>Lucas Smaniotto</a></p>
        <div className={styles.socialLinks}>
            <a href="https://github.com/lucassmaniotto"><AiFillGithub className={styles.socialIcons} /></a>
            <a href="https://www.instagram.com/corvus_tenebrae"><AiOutlineInstagram className={styles.socialIcons} /></a>
            <a href="https://twitter.com/alpiste_punk"><AiOutlineTwitter className={styles.socialIcons} /></a>
        </div>
    </footer>
  )
}
