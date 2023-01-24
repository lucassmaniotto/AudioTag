import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import styles from './Header.module.css';
import HeaderLink from 'components/HeaderLink';

export default function Nav() {
  return (
    <header className={styles.header}>
        <Link to="/">
            <Logo alt="Logo da AudioTag"/>
        </Link>
        <nav>
          <HeaderLink 
            url="/">
              Início
          </HeaderLink>
          <HeaderLink
            url="/favorites">
              Favoritos
          </HeaderLink>
        </nav>
    </header>
  )
}
