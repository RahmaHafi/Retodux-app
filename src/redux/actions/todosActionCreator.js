import { ADD_TODO } from '../types/todoTypes'
export const addTodo = (obj) => { 
    return {
        type: ADD_TODO,
        payload: obj
    }
}