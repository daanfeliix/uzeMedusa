import Head from 'next/head'
import { Banner } from '../components/Banner';
import { Catalog } from '../components/Catalog';
import { Header } from '../components/Header';
import styles from '../styles/pages/home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Marck+Script&family=Roboto+Slab:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <section>
        <Header></Header>
        <Banner />
      </section>
      <section>
        <Catalog />
      </section>
      <section></section>
    </div>
  )
}
