import * as constants from './constants';
import axios from 'axios';

export const changeFocused = () => ({
    type: constants.CHANGE_FOCUSED
});

const changeData = (data) => ({
    type: constants.CHANGE_DATA,
    data,
    totalPage: Math.ceil(data.searchData.length / 10)
});

// 发 ajax 请求获取热门搜索中的数据
export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/searchList.json').then((res) => {
            const data = res.data.data;
            dispatch(changeData(data));
        }).catch(() => {
            console.log('error')
        });
    }
}

export const changeBlur = () => ({
    type: constants.CHANGE_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const switchPage = (page) => ({
    type: constants.SWITCH_PAGE,
    page
});