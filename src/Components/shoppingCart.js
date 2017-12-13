import React from 'react';
import {connect} from 'react-redux';
import CartNav from './cartNav.js'
import CartItem from './cartItem.js';

class ShoppingCart extends React.Component {

	creatList() {
		let itemList = this.props.itemList;
		if(!itemList)
			return;
		else
			return itemList.map((item) => {
				return(<CartItem key={item.id} 
					itemNum={item.id} 
					productName={item.productName} 
					comments={item.comments}
					price={item.price}
					tax={item.tax}/>);
			});;

	}

	render() {
		return (
			<div id="shopping-cart" className="col-md-8 col-md-offset-2">
				{/* creating cart's nav */}
				<CartNav headline={"Your Cart"} 
					clearCart={this.clearCart}
					addProduct={this.addProduct}
				/>
				{/* creating nav content */}
				<table className="col-md-12">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Comments</th>
							<th>Price</th>
							<th>Tax</th>
							<th>Total Item</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.creatList()}
					</tbody>
				</table>
			</div>
		);
	}
}

//
function mapStateToProps(state){
	return {itemList : state.itemList};
}

export default connect(mapStateToProps)(ShoppingCart);