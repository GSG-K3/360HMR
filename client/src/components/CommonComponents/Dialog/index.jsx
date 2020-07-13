import React, { Fragment } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

function DialogForm(props) {
	return (
		<Fragment>
			<Dialog
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Create Form ?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are You Sure?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleClose} color="primary">
						Disagree
					</Button>
					<Button onClick={props.handleClose} color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
}

export default DialogForm;
