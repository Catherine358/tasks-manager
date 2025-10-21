import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import TaskItem from "./TaskItem.tsx";

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  return (
      <ul>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
        ))}
      </ul>
  );
};