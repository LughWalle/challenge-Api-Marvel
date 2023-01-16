import Head from 'next/head'
import Logo from '_assets/logo.svg'

import styles from '_styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel - heros</title>
        <meta name="description" content="created by Lugh" />
        <link rel="icon" href="/ironman.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Logo width={44.24} height={67} />
          </span>
        </a>
      </footer>
    </div>
  )
}
