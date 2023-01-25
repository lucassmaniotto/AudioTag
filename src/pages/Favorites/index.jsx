import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import styles from './Favorites.module.css';

export default function Favorites() {
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        <Card title="Bring Me The Horizon" cover="https://iili.io/H0u6AUF.png" />
      </section>
    </>
  )
}
