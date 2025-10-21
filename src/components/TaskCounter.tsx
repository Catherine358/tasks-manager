import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

const DAILY_GOAL = 200;

export default function TaskCounter() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const remainingTasks = DAILY_GOAL - doneCount;

  return (
    <div>
      <div>
        <span>{doneCount}</span>
        <span>Your score points</span>
      </div>
      {remainingTasks > 0 && (
          <span>{remainingTasks} more to reach the daily goal</span>
      )}
    </div>
  );
};