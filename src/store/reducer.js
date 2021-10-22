const defaultState = {
    inputValue: '123',
    list: [1,2,3]
}

export default (state = defaultState, action) => {
    if(action.type === 'CHANGE_INPUT_VALUE'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    return state;
    // switch(action.type){
    //     case 'CHANGE_INPUT_VALUE':
    //         const newState = JSON.parse(JSON.stringify(state));
    //         newState.inputValue = action.inputValue;
    //         return newState;
    //     default:
    //         return state;
    // }
}
