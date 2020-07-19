import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewMember from './components/LayoutComponents/Dashboard/NewMember';
import History from './components/LayoutComponents/Dashboard/History';

import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/dashboard/newMember" exact component={NewMember} />
				<Route path="/dashboard/history" exact component={History} />
			</Switch>
		</Router>
	);
}

export default App;
