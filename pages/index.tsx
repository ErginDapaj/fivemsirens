import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Snowfall from 'react-snowfall'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FivemSirens Coming Soon</title>
        <meta name="description" content="New Fivem Site Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <label className={styles.lol}>Coming</label> <a href="https://discord.gg/ewdQPc9G4m">Soon!</a>
        </h1>

        <p className={styles.description}>
          Working day and night on this page!
          <code className={styles.code}>2 Day Streak</code>
        </p>
        <Snowfall
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={200}
        />
        <div className={styles.grid}>
          <a href="https://discord.gg/ewdQPc9G4m" className={styles.card}>
            <h2>Join Our Discord &rarr;</h2>
            <p>Join one of the greatest communities!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with 🖤 by {'Grainger#5445'}
      </footer>
    </div>
  )
}
