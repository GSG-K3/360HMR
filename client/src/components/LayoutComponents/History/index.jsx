import React, { useState, useEffect } from 'react';
import {
	Button,
	Box,
	List,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
	Grid,
	Avatar,
} from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import LoaderProgress from '../../CommonComponents/LoaderProgress';
import { Person } from '@material-ui/icons';
import HistoryStyle from './HistoryStyle';

export default function AddNewMember() {
	const classes = HistoryStyle();
	const [employees, setEmployees] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		axios
			.get('/api/employees')
			.then((result) => {
				const emp = { ...result.data.data };

				setEmployees(emp);
			})
			.catch((err) => {
				if (err.response.data) swal('Error', err.response.data.messag, 'error');
			});
	}, []);

	const buildList = (employee) => {
		const empNames = [];
		if (!employee) {
			return empNames;
		}
		const keyLength = Object.keys(employee).length;
		for (let emp of Object.keys(employee)) {
			const empValue = employee[emp];

			empNames.push(
				<React.Fragment>
					<Box boxShadow={2}>
						<ListItem className={classes.listItem}>
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src="https://ibb.co/1fJgHrv" />
								{/* <Person color="disabled" fontSize="large" /> */}
							</ListItemAvatar>
							<ListItemText
								primary={empValue.name}
								className={classes.ItemText}
							/>
							<Button color="text.secondary" variant="contained" size="larg">
								<Link to={`/dashboard/history/${empValue.employee_id}`}>
									{' '}
									المقيمين
								</Link>
							</Button>
						</ListItem>
					</Box>
				</React.Fragment>,
			);
		}
		if (empNames.length === keyLength && isLoading) {
			setIsLoading(false);
		}
		return empNames;
	};

	return (
		<Box m={3}>
			<LoaderProgress isLoading={isLoading} />
			<List className={classes.list}>{buildList(employees)}</List>
		</Box>
	);
}
