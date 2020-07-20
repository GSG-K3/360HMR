import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewMember from './components/LayoutComponents/NewMember';
import History from './components/LayoutComponents/History';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';
import Form from './components/LayoutComponents/Form';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<PrivateRoute path="/dashboard" exact component={Dashboard} />
					<PrivateRoute path="/dashboard/form" exact component={Form} />
					<PrivateRoute
						exact
						path="/dashboard/new-employee"
						component={NewMember}
					/>
					<PrivateRoute path="/dashboard/history" exact component={History} />
					<PrivateRoute
						path="/dashboard/history/:id"
						exact
						component={HistorySummary}
					/>
					<PrivateRoute
						path="/dashboard/history/:id/response/:name"
						exact
						component={ResultReview}
					/>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
