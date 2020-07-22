import React, { useState, useEffect } from 'react';
import {
	Button,
	Box,
	List,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

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
						<ListItem className={classes.theSeclist}>
							<ListItemAvatar>
								<Person color="disabled" fontSize="large" />
							</ListItemAvatar>
							<ListItemText
								primary={empValue.reviewer_name}
								className={classes.ItemText}
							/>
							<Button
								onClick={() =>
									history.push(
										`/dashboard/history/${id.id}/response/${empValue.reviewer_name}`,
									)
								}
								variant="contained"
								color="primary"
								size="large"
							>
								التقييم
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
