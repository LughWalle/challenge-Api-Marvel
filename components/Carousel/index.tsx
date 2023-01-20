import React, { useContext, useState } from 'react';
import cs from 'classnames';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { MarvelContext } from '_context/MarvelContext';
import Card from '_components/ui/card';
import Arrow from '_assets/icon-arrow.svg';
import styles from './styles.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
  const { featChars } = useContext(MarvelContext);

  const ContentCarousel = () => {
    return (
      <>
        <div className={styles.nav}>
          <p className={styles.title}>PERSONAGENS EM DESTAQUE</p>
          <div className={styles.btnNav}>

          <ButtonBack className={styles.btn}><Arrow className={styles.left} /></ButtonBack>
          <ButtonNext className={styles.btn}><Arrow /></ButtonNext>
          </div>
          </div>
          <Slider className={styles.cardsList}>
            {
              featChars.map((char, i) => (
                <Slide index={i}>
                  <Card variant='secondary' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} title={char.name} />
                </Slide>
              )
              )
            }
          </Slider>
      </>
    )
  }

  return (
    <div className={styles.container}>
        <CarouselProvider
          naturalSlideWidth={239}
          naturalSlideHeight={272}
          totalSlides={featChars.length}
          visibleSlides={4}
          className={styles.carousel}
        >
          <ContentCarousel />
        </CarouselProvider>
        <CarouselProvider
          naturalSlideWidth={52}
          naturalSlideHeight={58}
          totalSlides={featChars.length}
          visibleSlides={3}
          className={styles.carouselMedium}
        >
          <ContentCarousel />
        </CarouselProvider>
    </div>
  )
}

export default Carousel