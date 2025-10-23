import * as React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  text,
  onClick,
  className,
  icon,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={className ?? styles.startButton}>
      {icon}
      {text}
    </button>
  );
}
