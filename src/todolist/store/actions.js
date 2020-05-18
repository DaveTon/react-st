import * as constants from './constants';

export const changeInputValue = (value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    value
})

export const addValueList = () => ({
    type: constants.ADD_VALUE_LIST
})