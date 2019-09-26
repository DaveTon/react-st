import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from './../pages/home/store';
import { reducer as followReducer } from '../pages/follow/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    follow: followReducer
});

export default reducer;