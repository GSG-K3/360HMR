import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/LayoutComponents/Form';
import NewMember from './components/LayoutComponents/Dashboard/NewMember';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';
import History from './components/LayoutComponents/Dashboard/History';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/dashboard/form" exact component={Form} />
					<Route exact path="/dashboard/new-employee" component={NewMember} />
					<Route path="/dashboard/history" exact component={History} />
				</Switch>
			</Router>
		</Fragment>
	);
}
export default App;
