import * as constants from './constants';

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state));
    // switch(action.type){
    //     case constants.CHANGE_FOCUSED:
    //         return newState.focused = action.focused;
    //     case constants.CHANGE_BLUR:
    //         return newState.focused = action.focused;
    //     default:
    //         return state;
    // }

    if(action.type === constants.CHANGE_FOCUSED){
        return{
            focused: true
        }
    }
    if(action.type === constants.CHANGE_BLUR){
        return{
            focused: false
        }
    }
    return state;
}