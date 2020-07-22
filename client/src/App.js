import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NewMember from './components/LayoutComponents/NewMember';
import History from './components/LayoutComponents/History';
import HistoryDetails from './components/LayoutComponents/HistoryDetails';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';
import ResultReview from './components/LayoutComponents/TheResult';
import Form from './components/LayoutComponents/Form';
import NavBar from './components/CommonComponents/NavBar';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Grid direction="row" container>
						<Grid item xs={12} md={12}>
							<NavBar />
						</Grid>
						<Grid item container>
							<Grid item xs={false} md={1}></Grid>
							<Grid
								item
								container
								xs={12}
								md={10}
								direction="row"
								justify="center"
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
									<PrivateRoute
										path="/dashboard/history/:id"
										exact
										component={HistoryDetails}
									/>
									<PrivateRoute
										path="/dashboard/history/:id/response/:name"
										exact
										component={ResultReview}
									/>
								</Switch>
							</Grid>
							<Grid item xs={false} md={1} />
						</Grid>
					</Grid>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
