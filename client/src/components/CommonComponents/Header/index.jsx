import React, { useContext } from 'react';
import useStyles from './style';
import { Grid, Typography } from '@material-ui/core';
import { AuthContext } from '../../../Auth';
import { withRouter } from 'react-router-dom';
const Header = (props) => {
	const classes = useStyles();
	const { currentUser } = useContext(AuthContext);
	const pathname = props.history.location.pathname;
	const hidden = pathname === '/' ? classes.hidden : classes.container;
	const HeaderName =
		pathname === '/dashboard/history'
			? 'سجل التقييم'
			: pathname === '/dashboard/form'
			? 'إنشاء تقييم جديد '
			: pathname === '/dashboard/new-employee'
			? 'إضافة موظف جديد'
			: null;

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
					{HeaderName}
				</Typography>
			</Grid>
			<Grid item className={classes.headerTwo}>
				<Typography></Typography>
			</Grid>
		</Grid>
	);
};

export default withRouter(Header);
