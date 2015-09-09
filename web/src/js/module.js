// Bootstrapping module
import React from 'react';  
import Router from 'react-router';  
import routes from 'routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
window.React = React;

Router.run(routes, Router.HistoryLocation, (Root, state) => {
	React.render(<Root {...state}/>, document.getElementById('content'));
});