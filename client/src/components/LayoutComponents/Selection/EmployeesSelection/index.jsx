import React, { Fragment, Component } from 'react';
import {
	Checkbox,
	FormControlLabel,
	ListItemText,
	List,
	ListItem,
	Paper,
	Divider,
	Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Styles from './style';
import context from '../context';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

class EmployeeSelection extends Component {
	render() {
		const { classes } = this.props;
		const { employees, selectedEmployees, handleCheckEmployee } = this.context;
		return (
			<Fragment>
				<Paper elevation={3} className={classes.paper}>
					{employees.map((employee, index) => {
						return (
							<Fragment key={index}>
								<Grid container>
									<List
										component="nav"
										className={classes.root}
										aria-label="employees List"
										key={index}
									>
										<ListItem>
											<Grid container item xs={12} justify="space-around">
												<Grid item container justify="space-evenly" xs={6}>
													<Grid item>
														<AccountCircleTwoToneIcon
															className={classes.icon}
														/>
													</Grid>
													<Grid item>
														<ListItemText
															disableTypography={true}
															className={classes.employee}
															primary={employee.name}
														/>
													</Grid>
												</Grid>
												<Grid item xs={6} container justify="flex-end">
													<FormControlLabel
														control={
															<Checkbox
																checked={Boolean(
																	selectedEmployees[employee.id],
																)}
																onChange={() => handleCheckEmployee(employee)}
																name={employee.name}
																color="primary"
																size="medium"
																inputProps={{
																	'aria-label': 'primary checkbox',
																}}
															/>
														}
														key={index}
													/>
												</Grid>
											</Grid>
										</ListItem>
									</List>
								</Grid>
								<Divider />
							</Fragment>
						);
					})}
				</Paper>
			</Fragment>
		);
	}
}
EmployeeSelection.contextType = context;
export default withStyles(Styles)(EmployeeSelection);
