import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // To add a todo
        addTodo: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const { addTodo} = todoReducer.actions
export const reducer = todoReducer.reducer