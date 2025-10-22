import TaskList from "../../components/TaskList/TaskList.tsx";
import TaskStatistics from "../../components/TaskStatistics/TaskStatistics.tsx";
import TaskCounter from "../../components/TaskCounter/TaskCounter.tsx";
import styles from './TaskQueue.module.css';
import Button from "../../components/Button/Button.tsx";
import WeatherWidget from "../../components/WeatherWidget/WeatherWidget.tsx";

export default function TaskQueue() {
    return (
        <main className={styles.container}>
            <h1>Task Queue</h1>
            <section className={styles.weatherSection}>
                <TaskCounter />
                <WeatherWidget />
            </section>
            <section className={styles.listSection}>
            <TaskList />
            </section>
            <section className={styles.statsSection}>
                <TaskStatistics />
            </section>
            <Button onClick={() => {}} text="Start queue from the beginning" />
        </main>
    );
}