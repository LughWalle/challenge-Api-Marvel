import React from 'react';
import styles from './styles.module.scss';
import MasterCard from '_assets/mastercard-marvel.png';
import Button from '_components/ui/Button';
import Image from 'next/image';
import Link from '_components/ui/Link';

type Props = {}

const CredCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MARVEL MASTERCARD</h1>
      <p className={styles.description}>Desbloqueie seus super poderes</p>
      <Image className={styles.img} src={MasterCard} alt='cartão master'/>
      <Button onClick={() => {alert('clicou')}}>CADASTRE-SE AGORA</Button>
      <Link target="_blank" className={styles.link} href='#'>ENTENDA COMO FUNCIONA</Link>
    </div>
  )
}

export default CredCard