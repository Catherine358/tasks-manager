import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskCounter from '../../components/TaskCounter/TaskCounter.tsx';
import TaskCard from '../../components/TaskCard/TaskCard.tsx';
import type { RootState } from '../../store/store.ts';
import styles from './TaskDetails.module.css';

export default function TaskDetails() {
  const { id } = useParams();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === Number(id));

  return (
    <main>
      <h1>Task Details</h1>
      <section>
        <TaskCounter />
      </section>
      {!task ? (
        <p>No task was found.</p>
      ) : (
        <section>
          <TaskCard task={task} />
        </section>
      )}
      <div className={styles.backContainer}>
        <span aria-hidden="true" className={styles.backIcon}>
          ←
        </span>
        <Link to="/" className={styles.back}>
          Back to the queue
        </Link>
      </div>
    </main>
  );
}
