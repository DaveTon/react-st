import * as constants from './constants';

const defaultState = {
    topicList: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            // newState.topicList.push(action.data);
            newState.topicList = action.data;
            return newState;
        default:
            return newState;
    }
}