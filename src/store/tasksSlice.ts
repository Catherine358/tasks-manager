import tasksData from '../data/tasks.json';
import type {Task} from "../types/task.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface TasksState {
    tasks: Task[];
    filter: 'all' | 'new' | 'done' | 'escalated';
}

const initialState: TasksState = {
    tasks: tasksData,
    filter: 'all',
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        updateTask: (state, action: PayloadAction<{ id: number; data: Partial<Task> }>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) Object.assign(task, action.payload.data);
        },
        setFilter: (state, action: PayloadAction<TasksState['filter']>) => {
            state.filter = action.payload;
        },
    }
});

export const { updateTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;

export const selectFilteredTasks = (state: { tasks: TasksState }) => {
    const { tasks, filter } = state.tasks;
    return filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);
};