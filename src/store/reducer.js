const defaultState = {
    inputValue: 'hello',
    list: [1, 2, 3, 4]
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "CHANGE_INPUT_VALUE":
            newState.inputValue = action.value;
            return newState;
        case "ADD_INPUT_VALUE":
            newState.list.push(newState.inputValue);
            newState.inputValue = ''
            return newState;
        default:
            return state;
    }
}