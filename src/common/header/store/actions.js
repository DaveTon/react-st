import * as constants from './constants';

export const changeFocused = () => ({
    type: constants.CHANGE_FOCUSED
});

export const getListData = () => {
    return (dispatch) => {
        console.log(123)
    }
}

export const changeBlur = () => ({
    type: constants.CHANGE_BLUR
});

