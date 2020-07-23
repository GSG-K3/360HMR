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
								{'إنشاء ملف التقييم!'}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									هل ترغب بفحص ملف التقييم قبل ان يتم نشره؟
									<Link to="http://localhost:3000/form/1">تقيـــيم رقم </Link>
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleCloseDialog} color="primary">
									الغاء
								</Button>
								<Button onClick={handleCloseDialog} color="primary" autoFocus>
									نشر
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
