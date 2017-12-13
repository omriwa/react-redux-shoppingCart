import {createStore} from 'redux';
import allReducers from './Reducers/allReducers.js';
//store
const store = createStore(allReducers);

// // reducers
// function itemsReducer() {
// 	return {
// 		itemList: [
// 			{
// 				id: 1,
// 				productName: 'gluewein',
// 				comments: 'very good',
// 				price: 50,
// 				tax: 5
// 			}
// 			,
// 			{
// 				id: 2,
// 				productName: 'shoko',
// 				comments: 'very good',
// 				price: 40,
// 				tax: 10
// 			}
// 		]
// 	};
// }

export {store};