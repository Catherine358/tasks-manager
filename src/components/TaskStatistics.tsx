import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

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
    <div>
      <div>
        <span>Done</span>
        <span>{doneCount}, {donePrcnt}%</span>
      </div>
      <div>
        <span>New</span>
        <span>{newCount}, {newPrcnt}%</span>
      </div>
      <div>
        <span>Escalated</span>
        <span>{escalatedCount}, {escalatedPrcnt}%</span>
      </div>
      <div>
        <span>Total</span>
        <span>{totalCount}</span>
      </div>
    </div>
  );
};