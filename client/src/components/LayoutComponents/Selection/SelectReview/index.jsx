import React, { Fragment, Component } from 'react';
import {
	InputLabel,
	Select,
	FormControl,
	Typography,
	Grid,
} from '@material-ui/core';
import Styles from './style';
import context from '../context';
import { withStyles } from '@material-ui/core/styles';

class SelectionReview extends Component {
	render() {
		const { classes } = this.props;
		const { reviewee, handleSelectReviewee, employees } = this.context;
		return (
			<Fragment>
				<Grid container alignItems="center">
					<Grid item>
						<Typography variant="h5" className={classes.text}>
							الرجاء قم باختيار الموظف الذي سيتم تقييمه لهذا الشهر
						</Typography>
					</Grid>
					<Grid item className={classes.selectGrid}>
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel htmlFor="reviewees" className={classes.option}>
								اسم الموظف
							</InputLabel>
							<Select
								native
								value={reviewee}
								onChange={handleSelectReviewee}
								label="reviewee"
								inputProps={{
									name: 'reviewee',
									id: 'reviewees',
								}}
								className={classes.select}
							>
								<option aria-label="None" value="" />
								{employees.map((employee, index) => {
									return (
										<option
											value={index}
											key={index}
											className={classes.option}
										>
											{employee.name}
										</option>
									);
								})}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

SelectionReview.contextType = context;

export default withStyles(Styles)(SelectionReview);
