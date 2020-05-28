import * as constants from './constants';

const defaultState = {
    topicList: [],
    authorList: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            newState.topicList = action.data;
            return newState;
        case constants.CHANGE_AUTHOR_LIST_DATA:
            newState.authorList = action.data;
            return newState;
        default:
            return newState;
    }
}