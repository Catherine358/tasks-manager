import type { Task } from '../../types/task.ts';
import { useNavigate } from 'react-router-dom';
import styles from './TaskItem.module.css';

export default function TaskItem({ task }: { task: Task }) {
  const navigate = useNavigate();

  const taskHandler = () => navigate(`/task/${task.id}`);

  return (
    <li>
      <button
        className={`${styles.taskCard} ${styles[task.status]}`}
        onClick={taskHandler}
        aria-label={`View task ${task.contractNumber} - ${task.name}, Status: ${task.status}`}
      >
        <span>{task.contractNumber}</span>
        <span>{task.status}</span>
      </button>
    </li>
  );
}
