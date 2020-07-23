import React, { Fragment, Component } from 'react';
import SelectionReview from './SelectReview';
import context from './context';
import axios from 'axios';
import LoaderProgress from '../../CommonComponents/Loader/LoaderProgress';
import EmployeesSelection from './EmployeesSelection';
import { Grid } from '@material-ui/core';
import Buttons from './Buttons';
import { withStyles } from '@material-ui/core/styles';
import Styles from './style';
import swal from 'sweetalert';

class Selection extends Component {
	state = {
		reviewee: '',
		employees: [],
		loading: true,
		error: '',
		selectedEmployees: {},
		openDialog: false,
	};

	componentDidMount = () => {
		axios
			.get('/dashboard/form/selection')
			.then(({ data }) => {
				if (!data)
					return this.setState({
						loading: false,
						error: 'There was an error loading your data',
					});
				this.setState({ employees: data.data, loading: false });
			})
			.catch((err) =>
				this.setState({
					error: 'There was an error loading your data',
				}),
			);
	};
	handleClickOpenDialog = () => {
		this.setState({ openDialog: true });
	};

	handleCloseDialog = () => {
		this.setState({ openDialog: false });
	};

	handleCheckEmployee = (employee) => {
		this.setState({
			selectedEmployees: {
				...this.state.selectedEmployees,
				[employee.id]: !this.state.selectedEmployees[employee.id],
			},
		});
	};
	handleSelectReviewee = (event) => {
		this.setState({ reviewee: event.target.value });
	};
	handleBack = (event) => {
		event.preventDefault();
		this.props.history.push('/dashboard/form');
	};
	handelFinalForm = (event) => {
		event.preventDefault();

		return this.props.history.push('/form/1');
	};
	handelSubmit = (event) => {
		event.preventDefault();
		if (
			Object.keys(this.state.selectedEmployees).length == 0 ||
			this.state.reviewee === false
		)
			return swal({
				title: '!خطأ',
				text:
					'الرجاء اختيار الشخص الذي سيتم تقييمه واﻻسخاص الذين سيشاركوا في التقييم',
				icon: 'warning',
			});
		this.handleClickOpenDialog();
	};
	render() {
		const { classes } = this.props;
		return (
			<context.Provider
				value={{
					reviewee: this.state.reviewee,
					handleSelectReviewee: this.handleSelectReviewee,
					employees: this.state.employees,
					selectedEmployees: this.state.selectedEmployees,
					handleCheckEmployee: this.handleCheckEmployee,
					handleBack: this.handleBack,
					handleClickOpenDialog: this.handleClickOpenDialog,
					handleCloseDialog: this.handleCloseDialog,
					handelSubmit: this.handelSubmit,
					openDialog: this.state.openDialog,
					handelFinalForm: this.handelFinalForm,
				}}
			>
				<Fragment>
					<LoaderProgress isLoading={this.state.loading} />
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
						spacing={4}
						className={classes.container}
					>
						<Grid item>
							<SelectionReview />
						</Grid>
						<Grid item>
							<EmployeesSelection />
						</Grid>
						<Grid item container justify="space-between">
							<Buttons />
						</Grid>
					</Grid>
				</Fragment>
			</context.Provider>
		);
	}
}

export default withStyles(Styles)(Selection);
