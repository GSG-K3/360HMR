import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import NewMemberStyle from './NewMemberStyle';

export default function AddNewMember() {
	const [empData, setEmpdata] = React.useState({
		name: {
			value: '',
			message: '',
			isValid: true,
			isRequired: true,
			type: 'text',
			lable: 'Name',
		},
		email: {
			value: '',
			message: '',
			isValid: true,
			isRequired: true,
			type: 'text',
			lable: 'name',
		},
		date: {
			value: '2020/05/24',
			message: '',
			isValid: true,
			isRequired: true,
			type: 'date',
		},
		position: {
			value: '',
			message: '',
			isValid: true,
			isRequired: true,
			type: 'select',
			lable: 'position',
		},
	});
	const classes = NewMemberStyle();

	const handleChange = (event) => {
		const target = event.target;
		const form = { ...empData };
		form[target.name].value = target.value;
		setEmpdata(form);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let formValid = true;
		const fromInput = {};

		for (let control of Object.keys(empData)) {
			let input = empData[control];

			if (input.isRequired && input.type === 'text') {
				if (!input.value.trim()) {
					input.message = `Please Enter ${input.lable}`;
					input.isValid = false;
					formValid = false;
				} else {
					input.message = '';
					input.isValid = true;
				}
			}

			if (input.isRequired && input.type === 'select') {
				if (input.value === 0) {
					input.message = `Please Select ${input.lable}`;
					input.isValid = false;
					formValid = false;
				} else {
					input.message = '';
					input.isValid = true;
				}
			}

			fromInput[control] = input;
			if (!formValid) {
				swal('error', input.message, 'error');

				return;
			}
		}

		const TheData = {
			name: empData.name.value,
			email: empData.email.value,
			date: empData.date.value,
			position: empData.position.value,
		};
		console.log(empData.email.isValid);
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
					required
					name="name"
					error={!empData.name.isValid}
					autoFocus={true}
					id="standard-required"
					label="Name"
					onChange={handleChange}
					autoFocus={true}
				/>
				<TextField
					required={true}
					name="email"
					error={!empData.email.isValid}
					autoFocus={true}
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
