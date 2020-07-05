import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/dashboard" exact component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
