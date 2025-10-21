import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import TaskItem from "../TaskItem/TaskItem.tsx";
import styles from './TaskList.module.css';

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
      <ul className={styles.taskList}>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
        ))}
      </ul>
  );
};