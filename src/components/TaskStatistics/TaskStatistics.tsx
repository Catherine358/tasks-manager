import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import styles from "./TaskStatistics.module.css";

export default function TaskStatistics() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const totalCount = tasks.length;
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const newCount = tasks.filter((task) => task.status === "new").length;
  const escalatedCount = tasks.filter((task) => task.status === "escalated").length;
  const donePrcnt = Math.round((doneCount / totalCount) * 100);
  const newPrcnt = Math.round((newCount / totalCount) * 100);
  const escalatedPrcnt = Math.round((escalatedCount / totalCount) * 100);

  return (
    <div className={styles.statsCard}>
      <div className={styles.statRow}>
        <span className={styles.label}>Done</span>
        <span className={styles.value}>{doneCount}, {donePrcnt}%</span>
      </div>
      <div className={styles.statRow}>
        <span className={styles.label}>New</span>
        <span className={styles.value}>{newCount}, {newPrcnt}%</span>
      </div>
      <div className={styles.statRow}>
        <span className={styles.label}>Escalated</span>
        <span className={styles.value}>{escalatedCount}, {escalatedPrcnt}%</span>
      </div>
      <div className={styles.statRow}>
        <span className={styles.label}>Total</span>
        <span className={styles.value}>{totalCount}</span>
      </div>
    </div>
  );
};