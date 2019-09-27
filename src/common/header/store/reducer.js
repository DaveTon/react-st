import * as constants from './constants';

const defaultState = {
    focused: false,
    mouseIn: false,
    searchData: [],
    historyData: []
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
            // console.log(action)
            newState.searchData = action.data.searchData;
            newState.historyData = action.data.historyData;
            return newState;

        case constants.MOUSE_ENTER:
            newState.mouseIn = true;
            return newState;

        default:
            return newState;
    }
}