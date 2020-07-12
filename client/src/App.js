import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import NewMember from './Componants/dashboard/NewMember';

function App() {
	return (
		<Router>
			<Grid container>
				<Grid item container>
					<Grid item />
					<Grid item container>
						<Switch>
							<Route exact path="/dashboard" component={NewMember} />
						</Switch>
					</Grid>
				</Grid>
			</Grid>
		</Router>
	);
}

export default App;
