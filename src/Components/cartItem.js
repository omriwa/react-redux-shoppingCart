import React from 'react';
import funcs from '../Functions/functions.js';
import DeleteBtn from '../Containers/deleteBtnContainer.js';
import SaveBtn from '../Containers/saveBtnContainer.js';

class CartItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editItem: false,
			itemInfo: this.updateState()
		};
		//handlers binding
		this.calTotal = funcs.calTotal.bind(this.state.itemInfo);
		this.editItem = this.editItem.bind(this);
		this.editField = this.editField.bind(this);
		this.updateState = this.updateState.bind(this);
		this.finishEdit = this.finishEdit.bind(this);
		//set the prop itemInfo
	}

	updateState() {
		return {
			productName: this.props.productName,
			comments: this.props.comments,
			price: this.props.price,
			tax: this.props.tax
		};
	}

	editItem() {
		if(this.state.editItem == false){
			let newState = this.state;
			newState.editItem = true;
			this.setState(newState);
		}
	}

	editField(event) {
		let newState = this.state;
		if(event.target.type == 'number')
			newState.itemInfo[event.target.name] = parseInt(event.target.value);
		else
			newState.itemInfo[event.target.name] = event.target.value;
		console.log("checkkk");
		console.log(newState.itemInfo)
		this.setState(newState);
	}

	finishEdit() {
		let newState = this.state;
		newState.editItem = false;
		console.log(newState);
		this.setState(newState);
	}

	render() {
		let itemId = this.props.itemNum;
		let itemInfo = this.state.itemInfo;
		console.log(itemInfo);
		if(!this.state.editItem)
			return (
				<tr>
					<td>{this.props.itemNum}</td>
					<td onClick={this.editItem}>{itemInfo.productName}</td>
					<td onClick={this.editItem}>{itemInfo.comments}</td>
					<td onClick={this.editItem}>{itemInfo.price + " €"}</td>
					<td onClick={this.editItem}>{itemInfo.tax}%</td>
					<td>{this.calTotal() + " €"}</td>
					<td><DeleteBtn icon={'fa fa-window-close'} classes={'btn-danger'} itemId={itemId}/>
					</td>
				</tr>
			);
		else 
			return (
				<tr>
					<td>{this.props.itemNum}</td>
					<td><input onChange={this.editField} type="text" defaultValue={itemInfo.productName} name="productName"/></td>
					<td><input onChange={this.editField} type="text" defaultValue={itemInfo.comments} name="comments"/></td>
					<td><input onChange={this.editField} type="number" defaultValue={itemInfo.price} name="price"/></td>
					<td><input onChange={this.editField} type="number" defaultValue={itemInfo.tax} name="tax"/></td>
					<td></td>
					<td><span onClick={this.finishEdit}><SaveBtn itemInfo={itemInfo} icon={'fa fa-floppy-o'} classes={'btn-success'} itemId={itemId}/></span>
					</td>
				</tr>
			);
	}
}

export default CartItem;