import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NewMember from './components/LayoutComponents/Dashboard/NewMember';

import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';

function App() {
	return (
		<Router>
			<Grid direction="column" container>
				<Grid item xs={12}>
					{/* Header */}
				</Grid>
				<Grid item container>
					<Grid item xs={false} md={1} />
					<Grid item container xs={12} md={10} direction="row" justify="center">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/dashboard" exact component={Dashboard} />
							<Route
								exact
								path="/dashboard/new-employee"
								component={NewMember}
							/>
						</Switch>
					</Grid>
					<Grid item xs={false} md={1} />
				</Grid>
			</Grid>
		</Router>
	);
}

export default App;
