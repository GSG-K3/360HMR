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
	Typography,
} from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import LoaderProgress from '../../CommonComponents/LoaderProgress';
import { Person } from '@material-ui/icons';
import ResultReviewStyle from './ResultReviewStyle';

export default function ResultReview(data) {
	const classes = ResultReviewStyle();
	const [result, setResult] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const id = useParams();

	const theData = data.location.state;
	console.log(theData);
	// const theData={...data.location.state};
	// setResult(TheData);
	// useEffect(() => {
	// 	axios
	// 		.get(`/api/history/${id.id}`)
	// 		.then((result) => {
	// 			const emp = { ...result.data.data };
	// 			console.log(emp);
	// 			setEmployees(emp);
	// 		})
	// 		.catch((err) => {
	// 			if (err.response.data) swal('Error', err.response.data.messag, 'error');
	// 		});
	// }, []);
	const handleClick = (id) => {
		// console.log('id', id);
		// return <Link to={`/dashboard/history/${id}`} />;
	};
	// const buildList = (employee) => {
	// 	const empNames = [];
	// 	if (!employee) {
	// 		return empNames;
	// 	}
	// 	const keyLength = Object.keys(employee).length;
	// 	for (let emp of Object.keys(employee)) {
	// 		const empValue = employee[emp];

	// 		empNames.push(
	// 			<React.Fragment>
	// 				<ListItem alignItems="center">
	// 					<ListItemAvatar>
	// 						{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
	// 						<Person color="disabled" fontSize="large" />
	// 					</ListItemAvatar>
	// 					<ListItemText primary={empValue.reviewer_name} />
	// 					<Button
	// 						// onClick={handleClick(empValue.id)}
	// 						variant="contained"
	// 						// color="primary"
	// 					>
	// 						<Link to={`/dashboard/history/${empValue.id}`}>view</Link>"
	// 					</Button>
	// 				</ListItem>

	// 				<Divider variant="fullWidth" component="li" />
	// 			</React.Fragment>,
	// 		);
	// 	}
	// 	if (empNames.length === keyLength && isLoading) {
	// 		setIsLoading(false);
	// 	}
	// 	return empNames;
	// };

	return (
		<Box>
			{/* <LoaderProgress isLoading={isLoading} /> */}

			<Typography>{theData.question}</Typography>
			<Typography>{theData.context_answer}</Typography>
			{/* <List>{buildList(employees)}</List> */}
		</Box>
	);
}
