import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/LayoutComponents/Home';
import Dashboard from './Components/LayoutComponents/Dashboard';

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
