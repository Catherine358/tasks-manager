import tasksData from '../data/tasks.json';
import type {Task} from "../types/task.ts";
import {createSlice} from "@reduxjs/toolkit";

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: tasksData,
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
});

export default tasksSlice.reducer;