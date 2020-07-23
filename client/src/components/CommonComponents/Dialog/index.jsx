import React, { Fragment } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import context from '../../LayoutComponents/Selection/context';

function DialogForm(props) {
	return (
		<context.Consumer>
			{({ handleCloseDialog, handleClickOpenDialog, openDialog }) => {
				return (
					<Fragment>
						<Dialog
							open={openDialog}
							onClose={handleCloseDialog}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
								{'Create Form ?'}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									would you like to view the form before sharing it ?
									<Link to="http://localhost:3000/form/1">form</Link>
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleCloseDialog} color="primary">
									cancel
								</Button>
								<Button onClick={handleCloseDialog} color="primary" autoFocus>
									share
								</Button>
							</DialogActions>
						</Dialog>
					</Fragment>
				);
			}}
		</context.Consumer>
	);
}

export default DialogForm;
