import React from 'react';  
import ReactDOM from 'react-dom'
import {Router,Route} from 'react-router';  
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from 'stores/TangiblesStore';

import Main from 'components/main';  

window.React = React;

ReactDOM.render((
	<Provider store={store}>
		<Router>
			<Route path="/" component={Main}>
			</Route>
		</Router>
	</Provider>
	),
	document.getElementById('content')
);
