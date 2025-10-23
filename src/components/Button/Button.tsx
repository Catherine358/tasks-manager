import styles from './Button.module.css';
import * as React from 'react';

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
