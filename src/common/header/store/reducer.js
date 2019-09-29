import * as constants from './constants';

const defaultState = {
    focused: false,
    mouseIn: false,
    searchData: [],
    historyData: [],
    totalPage: 1,
    page: 1
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
            newState.searchData = action.data.searchData;
            newState.historyData = action.data.historyData;
            newState.totalPage = action.totalPage;
            return newState;

        case constants.MOUSE_ENTER:
            newState.mouseIn = true;
            return newState;

        case constants.MOUSE_LEAVE:
            newState.mouseIn = false;
            return newState;

        case constants.SWITCH_PAGE:
            newState.page = action.page;
            return newState;
            
        default:
            return newState;
    }
}