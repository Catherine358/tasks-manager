import type {Task} from "../../types/task.ts";
import {useNavigate} from "react-router-dom";
import styles from './TaskItem.module.css';


export default function TaskItem({ task }: { task: Task }) {
  const navigate = useNavigate();

  const taskHandler = () => navigate(`/task/${task.id}`);

  return (
    <li
        onClick={taskHandler}
        className={`${styles.taskCard} ${styles[task.status]}`}
    >
      <span>{task.contractNumber}</span>
      <span>{task.status}</span>
    </li>
  );
};