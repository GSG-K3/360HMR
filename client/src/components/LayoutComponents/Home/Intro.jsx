import React, { Component } from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import Styles from './style';
import SignIn from '../../CommonComponents/SignIn/index';
import { withStyles } from '@material-ui/core/styles';

class Intro extends Component {
	render() {
		return (
			<Box width={1} mt={4}>
				<Paper elevation={3}>
					<Grid container xs={12} justify="center" alignItems="center">
						<Grid item xs={6} container>
							<img src={require('../../../assets/home.png')} alt="home" />
						</Grid>
						<Grid item xs={6} container>
							<Typography variant="h4" component="h2" gutterBottom>
								نظام إدارة الموارد البشرية
							</Typography>
							<Typography variant="h4" component="h2" gutterBottom>
								نظام إدارة الموارد البشرية
							</Typography>
							<SignIn />
						</Grid>
					</Grid>
				</Paper>
			</Box>
		);
	}
}

export default withStyles(Styles)(Intro);
