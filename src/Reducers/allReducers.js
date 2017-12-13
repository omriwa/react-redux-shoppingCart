import {combineReducers} from 'redux';
import itemReducer from './itemReducer.js'

const allReducers = combineReducers({
	itemList: itemReducer
});


export default allReducers;