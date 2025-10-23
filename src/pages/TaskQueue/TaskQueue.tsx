import TaskList from "../../components/TaskList/TaskList.tsx";
import TaskStatistics from "../../components/TaskStatistics/TaskStatistics.tsx";
import TaskCounter from "../../components/TaskCounter/TaskCounter.tsx";
import styles from './TaskQueue.module.css';
import Button from "../../components/Button/Button.tsx";
import WeatherWidget from "../../components/WeatherWidget/WeatherWidget.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import {useNavigate} from "react-router-dom";
import FilterBar from "../../components/FilterBar/FilterBar.tsx";

export default function TaskQueue() {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const navigate = useNavigate();

    const startQueue = () => {
        if (tasks.length > 0) {
            navigate(`/task/${tasks[0].id}`);
        }
    };

    return (
        <main className={styles.container}>
            <h1>Task Queue</h1>
            <section className={styles.weatherSection}>
                <TaskCounter />
                <WeatherWidget />
            </section>
            <FilterBar />
            <section className={styles.listSection}>
            <TaskList />
            </section>
            <section className={styles.statsSection}>
                <TaskStatistics />
            </section>
            <Button onClick={startQueue} text="Start queue from the beginning" />
        </main>
    );
}