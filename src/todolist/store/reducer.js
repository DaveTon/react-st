import * as constants from './constants';

const defaultState = {
    value: 'Hello World',
    list: ['Dave', 'Tang']
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case constants.CHANGE_INPUT_VALUE:
            newState.value = action.value;
            return newState;

        case constants.ADD_VALUE_LIST:
            newState.list.push(newState.value);
            return newState;

        default:
            return state;
    }
}