import React, { Component } from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import Styles from './style';
import SignIn from '../../CommonComponents/SignIn/index';
import { withStyles } from '@material-ui/core/styles';

class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Box width={1} className={classes.box}>
				<Paper elevation={3} className={classes.paper}>
					<Grid
						container
						xs={12}
						justify="space-between"
						alignItems="center"
						className={classes.container}
					>
						<Grid item xs={5} container className={classes.container}>
							<img
								src={require('../../../assets/home.png')}
								alt="home"
								className={classes.image}
							/>
						</Grid>
						<Grid item xs={7} container justify="center">
							<Grid item className={classes.textContainer}>
								<Typography
									variant="h3"
									component="h2"
									gutterBottom
									className={classes.header}
								>
									نظام إدارة الموارد البشرية
								</Typography>
								<br />
								<br />
								<Typography
									variant="h5"
									component="h2"
									gutterBottom
									className={classes.header}
								>
									تقييم أداء الموظف بشكل كلي عبر شركتك. يمكنك إعداد التقارير
									وفقًا لمواصفاتك الدقيقة اجمع التعليقات من الأشخاص المناسبين في
									الوقت المناسب. قم بتقييم الأداء بشكل كلي واجعل الجميع في نفس
									الصفحة.
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
