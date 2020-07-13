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
		<Box component="div" width={1} bgcolor="warning.main" mx={23} mt={6}>
			<Grid container className={classes.root}>
				<Grid item xs={6} alignContent="center">
					<Box>
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image={require('../../img/addEmp.png')}
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
	);
}
