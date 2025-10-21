import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import styles from './TaskCounter.module.css';

const DAILY_GOAL = 200;

export default function TaskCounter() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const remainingTasks = DAILY_GOAL - doneCount;

  return (
    <div className={styles.counterCard}>
      <div className={styles.counterRow}>
        <span className={styles.counterNumber}>{doneCount}</span>
        <span className={styles.counterText}>Your score points</span>
      </div>
      {remainingTasks > 0 && (
          <span className={styles.counterInfo}>{remainingTasks} more to reach the daily goal</span>
      )}
    </div>
  );
};