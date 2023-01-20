import React, { ReactNode } from 'react'
import cs from 'classnames';
import styles from './styles.module.scss';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: string;
  target?: string;
}

const Link: React.FC<Props> = ({href, target, children, className, variant = 'primary'}) => {
  return (
    <a target={target} className={cs(styles.link, { [`${className}`]: className }, styles[variant])} href={href}>{children}</a>
  )
}

export default Link