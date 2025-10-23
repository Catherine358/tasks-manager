import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem.tsx';
import { selectFilteredTasks } from '../../store/tasksSlice.ts';
import styles from './TaskList.module.css';

export default function TaskList() {
  const tasks = useSelector(selectFilteredTasks);

  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
