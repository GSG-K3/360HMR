import React, { Fragment } from 'react';
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './style';
import Tabs from '../../CommonComponents/Tabs';

export default function MenuBar(props) {
	const classes = useStyles();
	const pathname = props.history.location.pathname;

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Grid>
						<img src={require('../../../assets/logo.png')} alt="logo" />
					</Grid>
					{pathname !== '/' ? (
						<Fragment>
							<Grid>
								<Tabs />
							</Grid>
							<Grid>
								<IconButton
									aria-label="display more actions"
									edge="start"
									zise="medium"
									color="default"
								>
									<MoreIcon />
								</IconButton>
							</Grid>
						</Fragment>
					) : null}
				</Toolbar>
			</AppBar>
		</div>
	);
}
