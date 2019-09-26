import * as constants from './constants';

export const changeFocused = () => ({
    type: constants.CHANGE_FOCUSED,
    focused: true
});

export const changeBlur = () => ({
    type: constants.CHANGE_BLUR,
    focused: false
});

