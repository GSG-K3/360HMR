import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import NewMemberStyle from './NewMemberStyle';

export default function AddNewMember() {
	const [empData, setEmpdata] = React.useState({
		name: '',
		email: '',
		date: '2020/05/24',
		position: '',
	});
	const classes = NewMemberStyle();

	const handleChange = (event) => {
		const target = event.target;
		const form = { ...empData };
		form[target.name] = target.value;
		setEmpdata(form);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const TheData = { ...empData };

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
					label="Name"
					onChange={handleChange}
				/>
				<TextField
					required={true}
					name="email"
					id="standard-required"
					label="Email"
					onChange={handleChange}
				/>
				<TextField
					required={true}
					name="date"
					id="date"
					label="Hire date"
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
					label="position"
					onChange={handleChange}
				/>
				<Button size="medium" color="primary" variant="contained" type="submit">
					ADD
				</Button>
			</div>
		</form>
	);
}
