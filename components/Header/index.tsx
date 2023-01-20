import React from 'react'
import MarvelLogo from '_assets/marvel-logo.svg'
import Link from '_components/ui/Link'
import styles from './styles.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <MarvelLogo className={styles.marvelLogo} />
          <nav className={styles.navBar}>
            <ul className={styles.menu}>
              <li><Link variant='secondary' href='#'>FILMES</Link></li>
              <li><Link variant='secondary' href='#'>QUADRINHOS</Link></li>
              <li><Link variant='secondary' href='#'>PROGRAMAS DE TV</Link></li>
              <li><Link variant='secondary' href='#'>JOGOS</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header