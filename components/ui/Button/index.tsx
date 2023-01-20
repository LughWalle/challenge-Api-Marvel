import React, { ReactNode } from "react";
import cs from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  onClick: () => void;
  className?: string
}

const Button: React.FC<Props> = ({ 
    children,
    onClick,
    className,
  }) => { 
  return (
    <button 
      onClick={onClick}
      className={cs(styles.btn, { [`${className}`]: className})}
    >
    {children}
    </button>
  );
}

export default Button;
