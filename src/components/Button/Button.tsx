import styles from './Button.module.css';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
      <button onClick={onClick} className={styles.startButton}>
          {text}
      </button>
  );
};