import TaskList from "../components/TaskList.tsx";
import TaskStatistics from "../components/TaskStatistics/TaskStatistics.tsx";
import TaskCounter from "../components/TaskCounter/TaskCounter.tsx";

export default function TaskQueue() {
    return (
        <main>
            <h1>Task Queue</h1>
            <section>
                <TaskCounter />
            </section>
            <section>
            <TaskList />
            </section>
            <section>
                <TaskStatistics />
            </section>
            <button>
                Start queue from the beginning
            </button>
        </main>
    );
}