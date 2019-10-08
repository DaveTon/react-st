import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (data) => ({
    type: constants.CHANGE_HOME_DATA,
    data
});

export const getHomeDataInfo = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: './api/mainList.json'
        }).then((res) => {
            const data = res.data.data;
            console.log(data.topicList[0].title)
            dispatch(changeHomeData(data.topicList));
        }).catch(() => {
            console.log('error')
        })
    }
};