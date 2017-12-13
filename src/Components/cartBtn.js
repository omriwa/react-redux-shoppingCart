import React from 'react';

class CartBtn extends React.Component {

	render() {
		let handler;
		let classes = (this.props.classes ? this.props.classes : "");
		let itemId = this.props.itemId;
		//choosing the right handler for the different btns
		if(this.props.itemId)
			handler = () => this.props.handler(itemId);
		else
			handler = this.props.handler;
		return (
			<button type="button" className={"btn " + classes} onClick={handler}>
			<i className={this.props.icon} aria-hidden="true"></i>
				{this.props.btnTxt}
			</button>
		);
	}
}

export default CartBtn;