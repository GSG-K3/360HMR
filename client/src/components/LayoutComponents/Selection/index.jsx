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

class Selection extends Component {
	state = {
		reviewee: '',
		employees: [],
		loading: true,
		error: '',
		selectedEmployees: {},
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
