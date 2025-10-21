import type {Task} from "../types/task.ts";
import {useNavigate} from "react-router-dom";


export default function TaskItem({ task }: { task: Task }) {
  const navigate = useNavigate();

  const taskHandler = () => navigate(`/task/${task.id}`);

  return (
    <li
        onClick={taskHandler}
    >
      {task.name}
    </li>
  );
};