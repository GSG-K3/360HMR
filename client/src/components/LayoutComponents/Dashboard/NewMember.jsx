import React from 'react';
import {
	TextField,
	Button,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Box,
	InputAdornment,
	FormControl,
	InputLabel,
	NativeSelect,
	Select,
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
	const validateEmail = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

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

		if (empData.email && !validateEmail(empData.email.value)) {
			empData.email.message = 'Enter a valid email please';
			swal('error', empData.email.message, 'error');
			empData.email.isValid = false;
		} else {
			const TheData = {
				name: empData.name.value,
				email: empData.email.value,
				date: empData.date.value,
				position: empData.position.value,
			};

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
		}
	};

	return (
		<Box component="div" bgcolor="info.main" mx={23} mt={6}>
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
								<Typography variant="h5" color="textSecondary" component="p">
									نظام إدارة الموارد البشرية
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
					<form autoComplete="off" onSubmit={handleSubmit}>
						<div dir="rtl">
							<Box
								display="flex"
								flexDirection="column"
								alignContent="center"
								m={6}
							>
								<Typography color="primary">املا بيانات الموظف</Typography>
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
									<FormControl className={classes.fullWidth}>
										<InputLabel
											htmlFor="position"
											color="primary"
											placeholder="	المهنة"
											// position="end"
										>
											المهنة
										</InputLabel>
										<Select
											required={true}
											error={!empData.position.isValid}
											autoFocus={true}
											color="secondary"
											onChange={handleChange}
											inputProps={{
												name: 'position',
											}}
										>
											<option value={'مبرمج'}>مبرمج</option>
											<option value={'سكرتير'}>سكرتير</option>
											<option value={'مدير قسم'}>مدير قسم</option>
										</Select>
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
	);
}
