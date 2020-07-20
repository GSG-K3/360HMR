import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './style';
import Tabs from '../Tabs';
import { AuthContext } from '../../../Auth';

export default function NavBar(props) {
	const classes = useStyles();
	const { currentUser } = useContext(AuthContext);
	const displayTab = !currentUser ? classes.hidden : '';
	return (
		<Grid container>
			<AppBar position="static" color="default">
				<Toolbar>
					<Grid container wrap="nowrap" spacing={6}>
						<Grid item>
							<img src={require('../../../assets/logo.png')} alt="logo" />
						</Grid>
						<Grid item container className={displayTab}>
							<Tabs />
						</Grid>
						<Grid item className={displayTab}>
							<IconButton
								aria-label="display more actions"
								edge="start"
								zise="medium"
								color="default"
							>
								<MoreIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Grid>
	);
}
