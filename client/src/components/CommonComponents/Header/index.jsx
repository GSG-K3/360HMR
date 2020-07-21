import React, { useContext } from 'react';
import useStyles from './style';
import { Grid, Typography } from '@material-ui/core';
import { AuthContext } from '../../../Auth';

export default () => {
	const classes = useStyles();
	const { currentUser } = useContext(AuthContext);
	const hidden = !currentUser ? classes.hidden : classes.container;

	return (
		<Grid container className={hidden}>
			<Grid
				item
				container
				direction="column"
				justify="flex-end"
				className={classes.headerOne}
			>
				<Typography variant="h4" className={classes.title}>
					إنشاء تقييم جديد
				</Typography>
			</Grid>
			<Grid item className={classes.headerTwo}>
				<Typography></Typography>
			</Grid>
		</Grid>
	);
};
