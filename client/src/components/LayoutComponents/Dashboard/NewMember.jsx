import React from 'react';
import {
	TextField,
	Button,
	Grid,
	Card,
	CardMedia,
	CardHeader,
	CardContent,
	Typography,
	Box,
	InputAdornment,
	FormControl,
	InputLabel,
	NativeSelect,
} from '@material-ui/core';
import { Person, AlternateEmail, DateRange } from '@material-ui/icons';
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
		<Box component="div" bgcolor="warning.main" mx={23} mt={6}>
			<Grid container className={classes.root}>
				<Grid item xs={6} alignContent="center">
					<Box>
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image={require('../../../img/addEmp.png')}
								title="img"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									Human Resource Management System for 360 reviews
								</Typography>
							</CardContent>
						</Card>
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
					spacing={1}
					alignItems="flex-end"
					justify="flex-start"
					className={classes.gutterBottom}
					justify="center"
				>
					<form noValidate autoComplete="off" onSubmit={handleSubmit}>
						<div dir="rtl">
							<Box
								display="flex"
								flexDirection="column"
								alignContent="center"
								m={6}
							>
								<Typography>املا بيانات الموظف</Typography>
								<Box m={2}>
									<TextField
										className={classes.fullWidth}
										required={true}
										error={!empData.name.isValid}
										autoFocus={true}
										name="name"
										id="standard-required"
										placeholder="الاسم"
										onChange={handleChange}
										variant="filled"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<Person />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Box m={2}>
									<TextField
										className={classes.fullWidth}
										required={true}
										error={!empData.email.isValid}
										autoFocus={true}
										name="email"
										id="standard-required"
										placeholder="الايميل"
										onChange={handleChange}
										variant="filled"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<AlternateEmail />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Box m={2}>
									<TextField
										className={classes.fullWidth}
										required={true}
										name="date"
										id="date"
										placeholder="تاريخ التوظيف"
										type="date"
										defaultValue="2020-05-24"
										variant="filled"
										InputLabelProps={{
											shrink: true,
										}}
										onChange={handleChange}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<DateRange />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Box m={2}>
									{/* <TextField
									required={true}
									name="position"
									id="standard-required"
									label="المهنة"
									onChange={handleChange}
									variant="filled"
								/> */}
									<FormControl className={classes.fullWidth}>
										<InputLabel htmlFor="event-category" color="secondary">
											المهنة
										</InputLabel>
										<NativeSelect
											error={!empData.position.isValid}
											autoFocus={true}
											color="secondary"
											// value={category_id.value}
											variant="filled"
											onChange={handleChange}
											inputProps={{
												name: 'position',
											}}
										>
											<option aria-label="None" value="" />
											<option value={'مبرمج'}>مبرمج</option>
											<option value={'سكرتير'}>سكرتير</option>
											<option value={'مدير قسم'}>مدير قسم</option>
										</NativeSelect>
									</FormControl>
								</Box>
								<Box m={2}>
									<Button
										size="small"
										color="primary"
										variant="contained"
										type="submit"
										className={classes.fullWidth}
									>
										اضافة
									</Button>
								</Box>
							</Box>
						</div>
					</form>
				</Grid>
			</Grid>
		</Box>
		// <form
		// 	className={classes.root}
		// 	noValidate
		// 	autoComplete="off"
		// 	onSubmit={handleSubmit}
		// >
		// 	<div>
		// 		<TextField
		// 			required
		// 			name="name"
		// 			error={!empData.name.isValid}
		// 			autoFocus={true}
		// 			id="standard-required"
		// 			label="Name"
		// 			onChange={handleChange}
		// 			autoFocus={true}
		// 		/>
		// 		<TextField
		// 			required={true}
		// 			name="email"
		// 			error={!empData.email.isValid}
		// 			autoFocus={true}
		// 			id="standard-required"
		// 			label="Email"
		// 			onChange={handleChange}
		// 		/>
		// 		<TextField
		// 			required={true}
		// 			name="date"
		// 			id="date"
		// 			label="Hire date"
		// 			type="date"
		// 			defaultValue="2020-05-24"
		// 			className={classes.textField}
		// 			InputLabelProps={{
		// 				shrink: true,
		// 			}}
		// 			onChange={handleChange}
		// 		/>
		// 		<TextField
		// 			required={true}
		// 			name="position"
		// 			id="standard-required"
		// 			label="position"
		// 			onChange={handleChange}
		// 		/>
		// 		<Button size="medium" color="primary" variant="contained" type="submit">
		// 			ADD
		// 		</Button>
		// 	</div>
		// </form>
	);
}
