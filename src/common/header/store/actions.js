import * as constants from './constants';

export const changeFocused = (focused) => ({
    type: constants.CHANGE_FOCUSED,
    focused: true
});

export const changeBlur = (focused) => ({
    type: constants.CHANGE_BLUR,
    focused: false
});

