import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import React from 'react';
import videos from 'json/db.json';

import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar suas bandas e clipes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id}/>
        ))}
      </section>
    </>
  )
}