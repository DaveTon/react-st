import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';
import axios from 'axios';

export const changeInputValue = (inputValue) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue
})

export const addTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const deleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getTodoListInit = () => {
    return (dispatch) => {
        axios.get('/api/todolist.json')
        .then((res)=>{
            const data = res.data;
            dispatch(data)
            console.log(data)
        })
        .catch(()=>{

        })
    }
}