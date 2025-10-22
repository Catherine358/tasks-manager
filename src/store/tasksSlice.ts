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
        updateTaskStatus: (state, action: PayloadAction<{ id: number; status: 'escalated' | 'done' }>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) task.status = action.payload.status;
        }
    }
});

export const { updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;