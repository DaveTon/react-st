import axios from 'axios';

export const getHomeDataInfo = () => {
    return (dispatch) => {
        axios.get('./api/mainList.json').then((res) => {
            const data = res.data;
            console.log(data);
        }).catch(() => {
            console.log('error')
        })
    }
};