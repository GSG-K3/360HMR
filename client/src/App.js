import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/LayoutComponents/Form';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/dashboard/form" exact component={Form} />
					<Route path="/" exact component={Home} />
					<Route path="/dashboard" exact component={Dashboard} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
