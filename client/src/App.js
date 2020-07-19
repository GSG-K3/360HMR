import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewMember from './components/LayoutComponents/Dashboard/NewMember';
import History from './components/LayoutComponents/Dashboard/History';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<PrivateRoute path="/dashboard" exact component={Dashboard} />
					<PrivateRoute
						path="/dashboard/newMember"
						exact
						component={NewMember}
					/>
					<PrivateRoute path="/dashboard/history" exact component={History} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
