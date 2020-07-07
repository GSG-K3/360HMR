import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import NewMember from '../dashboard/NewMember';

export default class UserLayout extends Component {
	render() {
		return (
			<Router onChange={this.onRouteChanged}>
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
}
