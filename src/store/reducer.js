import { combineReducers } from 'redux';
import { reducer as todolistReducer } from '../todolist/store';

const reducer = combineReducers({
    todo: todolistReducer
})

export default reducer;