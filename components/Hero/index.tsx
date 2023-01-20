import React from 'react'
import Carousel from '_components/Carousel'
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bgHero}>
          <h1 className={styles.title}>CONHEÇA NOSSOS PERSONAGENS</h1>
        </div>
        <div className={styles.carrossel}>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Hero