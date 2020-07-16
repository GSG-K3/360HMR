import React, { Component } from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import Styles from './style';
import SignIn from '../../CommonComponents/SignIn/index';
import { withStyles } from '@material-ui/core/styles';

class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Box width={1} mt={4} className={classes.box}>
				<Paper elevation={3} className={classes.paper}>
					<Grid container xs={12} justify="flex-start" alignItems="center">
						<Grid item xs={6} container>
							<img
								src={require('../../../assets/home.png')}
								alt="home"
								className={classes.image}
							/>
						</Grid>
						<Grid item xs={6} container justify="center" spacing={4}>
							<Grid item>
								<Typography
									variant="h3"
									component="h2"
									gutterBottom
									className={classes.header}
								>
									نظام إدارة الموارد البشرية
								</Typography>
								<Typography variant="h5" component="h2" gutterBottom>
									تقييم أداء الموظف بشكل كلي عبر شركتك. يمكنك إعداد التقارير
									وفقًا لمواصفاتك الدقيقة اجمع التعليقات من الأشخاص المناسبين في
									الوقت المناسب.
								</Typography>
							</Grid>
							<Grid item>
								<SignIn />
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Box>
		);
	}
}

export default withStyles(Styles)(Home);
