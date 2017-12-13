import React from 'react';
import funcs from '../Functions/functions.js';
import DeleteBtn from '../Containers/deleteBtnContainer.js';

class CartItem extends React.Component {
	constructor(props) {
		super(props);
		//handlers binding
		this.calTotal = funcs.calTotal.bind(this.props);
	}

	render() {
		let itemId = this.props.itemNum;
		return (
			<tr>
				<td>{this.props.itemNum}</td>
				<td>{this.props.productName}</td>
				<td>{this.props.comments}</td>
				<td>{this.props.price + " €"}</td>
				<td>{this.props.tax.toString()}%</td>
				<td>{this.calTotal() + " €"}</td>
				<td><DeleteBtn icon={'fa fa-window-close'} classes={'btn-danger'} itemId={itemId}/>
				</td>
			</tr>
		);
	}
}

export default CartItem;