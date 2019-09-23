import * as constants from './constants';

const defaultState = {
    list: ['Dave']
}

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        default:
            return state;
    }
}