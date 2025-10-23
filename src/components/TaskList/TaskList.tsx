import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem.tsx';
import styles from './TaskList.module.css';
import { selectFilteredTasks } from '../../store/tasksSlice.ts';

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
