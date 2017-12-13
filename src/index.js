import ReactDOM from 'react-dom';
import React from 'react';
import './CSS/index.css';
import './store.js'
import App from './Components/app.js'
import {Provider} from 'react-redux';
import {store} from './store.js';

ReactDOM.render(<Provider store={store}>
	<App/>
	</Provider> 
	, document.getElementById("root"));
