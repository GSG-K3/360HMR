import React from 'react';
import { ListItemText, ListItemIcon, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { StyledMenuItem, StyledMenu } from './style';

export default function CustomizedMenus(props) {
	return (
		<div>
			<StyledMenu
				id="customized-menu"
				anchorEl={props.anchorEl}
				keepMounted
				open={Boolean(props.anchorEl)}
				onClose={props.handleClose}
			>
				<StyledMenuItem onClick={props.handleClickDashboard}>
					<ListItemIcon>
						<DashboardIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</StyledMenuItem>

				<StyledMenuItem onClick={props.handleClickLogout}>
					<ListItemIcon>
						<ExitToAppIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Logout" />
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}
