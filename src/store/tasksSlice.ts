import tasksData from '../data/tasks.json';
import type {Task} from "../types/task.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: tasksData,
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        updateTask: (state, action: PayloadAction<{ id: number; data: Partial<Task> }>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) Object.assign(task, action.payload.data);
        }
    }
});

export const { updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;