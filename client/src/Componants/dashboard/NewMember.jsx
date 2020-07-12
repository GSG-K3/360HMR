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
	const [empData, setEmpdata] = React.useState({
		name: '',
		email: '',
		date: '2020/05/24',
		position: '',
	});
	const classes = useStyles();

	const handleChange = (event) => {
		const target = event.target;
		const form = { ...empData };
		form[target.name] = target.value;
		setEmpdata(form);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const TheData = { ...empData };
		console.log('theData', TheData);
		axios
			.post('/api/dashboard/newemployee', TheData)
			.then((res) => {
				if (res.status !== 200) {
					swal('Error', 'Error', 'error');
					return;
				}

				swal('Good job!', 'employee added successfuly', 'success');
			})
			.catch((err) => {
				if (err.response.data)
					swal('error', err.response.data.message, 'error');
			});
	};

	console.log('data', empData);
	return (
		<form
			className={classes.root}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<div>
				<TextField
					required={true}
					name="name"
					id="standard-required"
					label="الاسم"
					onChange={handleChange}
				/>
				<TextField
					required={true}
					name="email"
					id="standard-required"
					label="الايميل"
					onChange={handleChange}
				/>
				<TextField
					required={true}
					name="date"
					id="date"
					label="تاريخ التوظيف"
					type="date"
					defaultValue="2020-05-24"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleChange}
				/>
				<TextField
					required={true}
					name="position"
					id="standard-required"
					label="الوظيفة"
					onChange={handleChange}
				/>
				<Button size="medium" color="primary" variant="contained" type="submit">
					اضافة
				</Button>
			</div>
		</form>
	);
}
