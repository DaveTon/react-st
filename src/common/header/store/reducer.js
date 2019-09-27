import * as constants from './constants';

const defaultState = {
    focused: false
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
        default:
            return newState;
    }
}