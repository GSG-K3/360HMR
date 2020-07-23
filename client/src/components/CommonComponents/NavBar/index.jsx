import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './style';
import Tabs from '../Tabs';
import { AuthContext } from '../../../Auth';
import { withRouter } from 'react-router-dom';
import MenuButton from '../MenuButton';
import fire from '../SignIn/fire';

function NavBar(props) {
	const classes = useStyles();
	const { currentUser } = useContext(AuthContext);
	const pathname = props.history.location.pathname;
	const displayTab = pathname === '/' ? classes.hidden : '';

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClickLogout = (event) => {
		console.log('clicked');
		event.preventDefault();
		localStorage.removeItem('firebaseui::rememberedAccounts');
		fire.auth().signOut();
		setAnchorEl(null);
		return props.history.push('/');
	};
	const handleClickDashboard = (event) => {
		event.preventDefault();
		setAnchorEl(null);
		return props.history.push('/dashboard"');
	};
	return (
		<Grid container className={classes.NavBarContainer}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Grid container wrap="nowrap" spacing={6}>
						<Grid item>
							<img src={require('../../../assets/logo.png')} alt="logo" />
						</Grid>
						<Grid item container className={displayTab}>
							<Tabs props={props} />
						</Grid>
						<Grid item className={displayTab}>
							<IconButton
								aria-label="display more actions"
								edge="start"
								zise="medium"
								color="default"
								onClick={handleClick}
							>
								<MoreIcon />
							</IconButton>
							<MenuButton
								anchorEl={anchorEl}
								handleClose={handleClose}
								handleClickLogout={handleClickLogout}
								handleClickDashboard={handleClickDashboard}
							/>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Grid>
	);
}

export default withRouter(NavBar);
