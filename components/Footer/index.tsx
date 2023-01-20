import Image from 'next/image'
import React, { useContext } from 'react'
import Logo from '_assets/logo.svg'
import FB from '_assets/facebook.svg'
import SP from '_assets/spotify.svg'
import IG from '_assets/instagram.svg'
import YT from '_assets/youtube.svg'
import Button from '_components/ui/Button'
import Link from '_components/ui/Link'
import { MarvelContext } from '_context/MarvelContext'
import thumb from '_assets/thumbLastBlog.png'
import styles from './styles.module.scss'

const Footer = () => {
  const { handleValue, email } = useContext(MarvelContext)

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterCall}>
          <p className={styles.text}>RECEBA AS NOVIDADES DA MARVEL</p>
        </div>
        <form method="post">
          <h1 className={styles.singup}>Cadastre-se para receber nossas notícias em primeira mão<span className={styles.color}>!</span></h1>
          <label htmlFor="email" className={styles.label}>
            <span className={styles.betterEmail}>SEU MELHOR E-MAIL
              <input placeholder='Informe seu melhor e-mail' className={styles.email} onChange={handleValue} type="text" value={email} />
            </span>
            <Button className={styles.btn} onClick={() => alert(email)}>ENVIAR</Button>
          </label>
        </form>
      </div>
      <div className={styles.mainFooter}>
        <div className={styles.containerNav}>
          <div className={styles.contentNav}>
            <span className={styles.logo}>
              <Link target="_blank" href='#'>
                <Logo width={44.24} height={67} />
              </Link>
            </span>
            <nav className={styles.navMarvel}>
              <h1 className={styles.title}>A Marvel</h1>
              <ul>
                <li><a>Sobre a Marvel</a></li>
                <li><a>Ajuda</a></li>
                <li><a>Carreiras</a></li>
              </ul>
            </nav>
            <nav className={styles.navMidia}>
              <h1 className={styles.title}>Mídia</h1>
              <ul>
                <li><a>Filmes</a></li>
                <li><a>Quadrinhos</a></li>
                <li><a>Programas de TV</a></li>
                <li><a>Jogos</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.contentSocialBlog}>
            <div className={styles.lastPost}>
              <h1 className={styles.title}>Última do blog</h1>
              <div className={styles.post}>
                <Image className={styles.thumb} src={thumb} alt='challenge captain Marvel' />
                <p className={styles.description}>Captain Marvel Challenge invadiu o tapete vermelho do Oscar</p>
              </div>
              <a className={styles.continue} href="#">Continuar lendo</a>
            </div>
            <div className={styles.follow}>
              <h1 className={styles.title}>Siga a Marvel</h1>
              <span className={styles.midia}>
                <FB className={styles.logo}/>
                <SP className={styles.logo}/>
                <IG className={styles.logo}/>
                <YT className={styles.logo}/>
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer