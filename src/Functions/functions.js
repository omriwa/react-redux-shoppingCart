function calTotal() {
	let total = this.price + calPercentage.call(this);
	return total;
}

function calPercentage() {
	return this.price * (this.tax / 100);
}

function calSum(products,func) {
	let sum = 0;
	if(products)
		products.forEach(function(item) {
			sum += func.call(item);
		});
	return sum;
}

function calPercentageNet(products){
	let percentageTable = {};
	products.forEach(function(item){
		if(percentageTable[item.tax])
			percentageTable[item.tax] += calPercentage.call(item);
		else
			percentageTable[item.tax] = calPercentage.call(item);
	});
	return percentageTable;
}

//event handler for different buttons
const eventHandler = {
	onDelete: function(itemId){
		return {
			type: 'DELETE_ITEM',
			payload: (itemId - 1)
		};
	},
	onClearCart: function() {
		return {
			type: 'CLEAR_CART',
			payload: []
		};
	},
	onAddProduct: function() {
		return {
			type: 'ADD_ITEM'
		};
	},
	onSave: function(itemInfo) {
		return {
			type: 'SAVE_ITEM',
			payload: itemInfo
		}
	}
}

export default {calTotal , calPercentage , calSum , eventHandler , calPercentageNet};