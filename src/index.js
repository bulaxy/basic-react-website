import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import HomePage from "./views/HomePage/HomePage";
// import AboutMe from "views/AboutMe/AboutMe.js";

var hist = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={hist}>
			<Switch>
				<Route path="/" component={HomePage} />
				{/* <Route path="/aboutme" component={AboutMe} /> */}
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
);