import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputValue: '123',
    list: [1,2,3]
}

const state = (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(newState.index, 1);
        return newState;
    }
    return state;
    // switch(action.type){
    //     case 'CHANGE_INPUT_VALUE':
    //         const newState = JSON.parse(JSON.stringify(state));
    //         newState.inputValue = action.inputValue;
    //         return newState;
    //     default:
    //         return state;
    // }
}

export default state;
