import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import styles from './TaskCounter.module.css';

const DAILY_GOAL = 200;

export default function TaskCounter() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const remainingTasks = DAILY_GOAL - doneCount;
  const circumference = 2 * Math.PI * 90;
  const progressPercentage = (doneCount / DAILY_GOAL) * 100;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className={styles.counterCard}>
        <div className={styles.progressContainer}>
            <svg width="220" height="220" viewBox="0 0 220 220">
                <circle
                    className={styles.progressBackground}
                    cx="110" cy="110" r="90"
                    strokeWidth="12" fill="none"
                />
                <circle
                    className={styles.progressBar}
                    cx="110" cy="110" r="90"
                    strokeWidth="12" fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 110 110)"
                />
            </svg>
        </div>
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