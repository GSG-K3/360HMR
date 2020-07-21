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
// import ResultReviewStyle from './ResultReviewStyle';

export default function ResultReview() {
	const [result, setResult] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();

	// const theData = { ...data.location.state };
	// setResult(TheData);
	useEffect(() => {
		axios
			.get(`/api/dashboard/history/${params.id}/response/${params.name}`)
			.then((result) => {
				const emp = { ...result.data.data };
				console.log(emp);
				setResult(emp);
			})
			.catch((err) => {
				if (err.response.data) swal('Error', err.response.data.messag, 'error');
			});
	}, []);
	const handleClick = (id) => {
		// console.log('id', id);
		// return <Link to={`/dashboard/history/${id}`} />;
	};
	const buildAnswers = (results) => {
		const empNames = [];
		if (!results) {
			return empNames;
		}
		let count = 1;
		const keyLength = Object.keys(results).length;
		for (let emp of Object.keys(results)) {
			const empValue = results[emp];

			empNames.push(
				<React.Fragment>
					<Typography variant="h5">Question{count++} </Typography>
					<Typography>{empValue.question}</Typography>
					<Typography>{empValue.context_answer}</Typography>
					<Divider variant="middle" />
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

			<React.Fragment>{buildAnswers(result)}</React.Fragment>
		</Box>
	);
}
