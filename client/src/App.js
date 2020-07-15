import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewMember from './components/LayoutComponents/Dashboard/NewMember';

import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard/DashBoard';

function App() {
	return (
		<Router>
			<Switch>
				{/* <Route exact path="/dashboard" component={NewMember} /> */}
				<Route path="/" exact component={Home} />
				<Route path="/dashboard" exact component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
