import React from 'react';
import Image from 'next/image';
import cs from 'classnames';
import styles from './styles.module.scss';
type CardProps = {
  src: string;
  title: string;
  variant?: string;
}

const Card = ({ src, title, variant = 'primary' }: CardProps) => {  
  return (
    <div className={cs(styles.container, styles[variant])}>
      <div className={styles.gradient}>
        <Image className={styles.imageCard} width={variant === 'primary' ? 170 : 239} height={variant === 'primary' ? 193 : 272} alt={ title } src={ src } />
      </div>
      {/* {
        variant === 'primary' && ( */}
          <div className={styles.footerCard}>
            <p className={styles.titleFooter}>{ title }</p>
          </div>
        {/* )
      } */}
    </div>
  )
}

export default Card