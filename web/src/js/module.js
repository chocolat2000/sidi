'use strict';

import React from 'react';  
import ReactDOM from 'react-dom'
import {Router,Route} from 'react-router';  

import Main from 'components/main';  

window.React = React;

ReactDOM.render((
	<Router>
		<Route path="/" component={Main} />
	</Router>
	), document.getElementById('content'));
