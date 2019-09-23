// import * as constants from './constants';

const defaultState = {
    list: ['Dave']
}

export default (state = defaultState, action) => {
    switch(action.type){
        // case constants.ADD_LIST_ITEM:
        //     return addListItem(state, action)
        default:
            return state;
    }
}