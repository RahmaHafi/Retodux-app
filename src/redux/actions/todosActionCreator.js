import { ADD_TODO } from '../types/todoTypes'
import { DELETE_TODO} from '../types/todoTypes'
export const addTodo = (obj) => { 
    return {
        type: ADD_TODO,
        payload: obj
    }
}
export const deleteTodo = (id) => { 
    return {
        type: DELETE_TODO,
        payload: id
    }
}