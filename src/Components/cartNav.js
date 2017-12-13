import React from 'react';
import CartBtn from './cartBtn.js';
import ClearCartBtn from '../Containers/clearBtnContainer.js';
import AddProductBtn from '../Containers/addBtnContainer.js';
import {connect} from 'react-redux';

class CartNav extends React.Component {

	render() {
		return (
			<div id="cart-nav">
				<h3 className="col-md-4" id="cart-headline">{this.props.headline}</h3>
				{/* creating cart's buttons */}
				<div className="col-md-8 row" id="cart-buttons">
					<ClearCartBtn classes={'btn-danger'} icon={'fa fa-trash right-space'} itemList={this.props.itemList} btnTxt={"Clear Cart"} />
					<AddProductBtn classes={'btn-primary'} icon={'fa fa-cart-plus right-space'} itemList={this.props.itemList}  btnTxt={"Add New Product"} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {itemList: state.itemList};
}

export default connect(mapStateToProps)(CartNav);