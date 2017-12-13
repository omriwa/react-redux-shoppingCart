import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CartBtn from '../Components/cartBtn.js';
import funcs from '../Functions/functions.js';

// setup action creator and container

function matchDispatchToProps(dispatch) {
	return bindActionCreators({handler: funcs.eventHandler.onClearCart} , dispatch);
}

function mapStateToProps(state){
	return {itemList : state.itemList};
}

export default connect(mapStateToProps,matchDispatchToProps)(CartBtn);