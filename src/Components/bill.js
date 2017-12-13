import React from 'react';
import {connect} from 'react-redux';
import funcs from '../Functions/functions.js';

class Bill extends React.Component {

	calTotalNet() {
		let items = this.props.itemList;
		return funcs.calSum(items,funcs.calTotal);
	}

	calTotalTax() {
		let items = this.props.itemList;
		return funcs.calSum(items,funcs.calPercentage);
	}

	getPercentageNetList() {
		let percentageTable = funcs.calPercentageNet(this.props.itemList);
		let percentageList = [];
		let index = 0;
		for(let key in percentageTable) {
			let percentageItem = 
			<p key={index}>
				<span className="percentage">{key + "%"}</span>
				<span className="percentage-net">{percentageTable[key] + " €"}</span>
			</p>;
			percentageList.push(percentageItem);
			index++;
		}
		return percentageList;
	}

	render() {
		return (
			<div id="bill" className="col-md-3 col-md-offset-7">
				<h4>Net Total <span>{this.calTotalNet() + " €"}</span></h4>
				<hr/>
				<h4>Tax <span>{this.calTotalTax() + " €"}</span></h4>
				<div>
					{this.getPercentageNetList()}
				</div>
				<hr/>
				<h4>Grand Total <span>{this.calTotalNet() + " €"}</span></h4>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {itemList : state.itemList};
}

export default connect(mapStateToProps)(Bill);