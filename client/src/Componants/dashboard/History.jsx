import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

export default function AddNewMember() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField
					required={true}
					name="name"
					id="standard-required"
					label="Name"
				/>
			</div>
		</form>
	);
}
