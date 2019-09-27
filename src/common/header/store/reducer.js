import * as constants from './constants';

const defaultState = {
    focused: false,
    list: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.CHANGE_FOCUSED:
            newState.focused = true;
            return newState;
        
        case constants.CHANGE_BLUR:
            newState.focused = false;
            return newState;

        case constants.CHANGE_DATA:
            newState.list = action.data;
            return newState;

        default:
            return newState;
    }
}