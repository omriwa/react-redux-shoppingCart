const dataSet = [//initial data
			{
				id: 1,
				productName: 'gluwein',
				comments: 'very good',
				price: 50,
				tax: 5
			}
			,
			{
				id: 2,
				productName: 'shoko',
				comments: 'very good',
				price: 40,
				tax: 10
			},
			{
				id: 3,
				productName: 'vodka',
				comments: 'strong',
				price: 60,
				tax: 50
			}
		];
function itemReducer(itemList = dataSet , action) {
	switch(action.type){//checking whitch action has made
		case 'DELETE_ITEM':
			console.log(itemList);
			return deleteItemFromList.call(itemList,action.payload + 1);
		break;

		case 'CLEAR_CART':
			return [];
		break;

		case 'ADD_ITEM':
			let id = itemList.length + 1;
			let newItem = {
				id: id,
				productName: 'shoko',
				comments: 'very good',
				price: 40,
				tax: 10
			};
			itemList.push(newItem);
			return itemList.slice();
		break;

		default:
			return itemList;
	}
};
// delete the item that was clicked and return the new list with out the item
function deleteItemFromList(itemId) {
	let itemIndexToDel;
	itemIndexToDel = this.findIndex(item => item.id == itemId);
	if(itemIndexToDel != -1){
		let listFirstPart = this.slice(0,itemIndexToDel);
		let listSecPart = this.slice(itemIndexToDel + 1 , this.length + 1);
		fixItemsId.call(listSecPart);//fix the indexes
		return listFirstPart.concat(listSecPart);
	}
	else
		return this;
}

// fix the id in the itemlist after delete an item from it
function fixItemsId(){
	this.forEach(function(item){
		item.id = item.id - 1;
	});
}

export default itemReducer;
