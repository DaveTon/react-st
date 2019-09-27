import * as constants from './constants';
import axios from 'axios';

export const changeFocused = () => ({
    type: constants.CHANGE_FOCUSED
});

export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/searchList.json').then((res) => {
            console.log(res.data.data)
        }).catch(() => {
            console.log('error')
        });
    }
}

export const changeBlur = () => ({
    type: constants.CHANGE_BLUR
});

