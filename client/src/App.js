import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NewMember from './components/LayoutComponents/NewMember';
import History from './components/LayoutComponents/History';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';
import Form from './components/LayoutComponents/Form';
import NavBar from './components/CommonComponents/NavBar';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Grid direction="column" container className="Container">
						<Grid item xs={12}>
							<NavBar />
						</Grid>
						<Grid item container className="Container">
							<Grid item xs={false} md={1} className="Container"></Grid>
							<Grid
								item
								container
								xs={12}
								md={10}
								direction="row"
								justify="center"
								className="Container"
							>
								<Switch>
									<Route path="/" exact component={Home} />
									<PrivateRoute path="/dashboard" exact component={Dashboard} />
									<PrivateRoute path="/dashboard/form" exact component={Form} />
									<PrivateRoute
										exact
										path="/dashboard/new-employee"
										component={NewMember}
									/>
									<PrivateRoute
										path="/dashboard/history"
										exact
										component={History}
									/>
								</Switch>
							</Grid>
							<Grid item xs={false} md={1} className="Container" />
						</Grid>
					</Grid>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
