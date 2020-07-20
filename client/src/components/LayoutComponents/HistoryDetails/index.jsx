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
} from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import LoaderProgress from '../../CommonComponents/LoaderProgress';
import { Person } from '@material-ui/icons';
import HistorySummaryStyle from '../History/HistoryStyle';

export default function HistorySummary() {
	const classes = HistorySummaryStyle();
	const [employees, setEmployees] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const id = useParams();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(`/api/history/${id.id}`)
			.then((result) => {
				const emp = { ...result.data.data };
				console.log(emp);
				setEmployees(emp);
			})
			.catch((err) => {
				if (err.response.data) swal('Error', err.response.data.messag, 'error');
			});
	}, []);
	const handleClick = () => {
		history.push('/dashboard/history/1/response/ruba', {
			erw: 'er',
		});
	};
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
					<ListItem alignItems="center">
						<ListItemAvatar>
							{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
							<Person color="disabled" fontSize="large" />
						</ListItemAvatar>
						<ListItemText
							primary={empValue.reviewer_name}
							className={classes.lockk}
						/>
						<Button
							onClick={() =>
								history.push(
									`/dashboard/history/${id.id}/response/${empValue.reviewer_name}`,
								)
							}
							variant="contained"
							// color="primary"
						>
							{/* <Link to={`/dashboard/history/${empValue.id}`}>view</Link>" */}
						</Button>
					</ListItem>

					<Divider variant="fullWidth" component="li" />
				</React.Fragment>,
			);
		}
		if (empNames.length === keyLength && isLoading) {
			setIsLoading(false);
		}
		return empNames;
	};

	return (
		<Box>
			<LoaderProgress isLoading={isLoading} />
			<List>{buildList(employees)}</List>
		</Box>
	);
}
