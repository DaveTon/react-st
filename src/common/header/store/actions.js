import * as constants from './constants';
import axios from 'axios';

export const changeFocused = () => ({
    type: constants.CHANGE_FOCUSED
});

const changeData = (data) => ({
    type: constants.CHANGE_DATA,
    data
});

// 发 ajax 请求获取热门搜索中的数据
export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/searchList.json').then((res) => {
            const data = res.data;
            // console.log(data);
            dispatch(changeData(data.data));
        }).catch(() => {
            console.log('error')
        });
    }
}

export const changeBlur = () => ({
    type: constants.CHANGE_BLUR
});

