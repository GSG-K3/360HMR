import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import { useParams } from 'react-router';

import swal from 'sweetalert';
import axios from 'axios';
import LoaderProgress from '../../CommonComponents/Loader/LoaderProgress';

import theResult from './theResult';

export default function ResultReview() {
	const [result, setResult] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();
	const classes = theResult();

	useEffect(() => {
		axios
			.get(`/api/dashboard/history/${params.id}/response/${params.name}`)
			.then((res) => {
				if (res.data.data.length == 0) {
					swal('Warning', 'This user didnt review the employee yet');
				} else {
					const emp = { ...res.data.data };
					setResult(emp);
				}
			})
			.catch((err) => {
				if (err.response) swal('Error', err.response.messag, 'error');
			});
	}, []);

	const buildAnswers = (results) => {
		const empNames = [];
		if (!results) {
			return empNames;
		}
		let count = 1;
		const keyLength = Object.keys(results).length;
		for (let emp of Object.keys(results)) {
			const empValue = results[emp];
			if (empValue.type === 'نصي')
				empNames.push(
					<React.Fragment>
						<Grid className={classes.texts}>
							<Typography variant="h5">السؤال {count++}</Typography>
							<Typography>{empValue.context}</Typography>
							<br></br>
							<Typography>{empValue.answer}</Typography>
						</Grid>
						<Divider variant="middle" />
					</React.Fragment>,
				);
			if (empValue.type === 'تقيمي') {
				empNames.push(
					<React.Fragment>
						<Grid className={classes.texts}>
							<Box component="fieldset" mb={3} borderColor="transparent">
								<Typography variant="h6"> السؤال {count++}</Typography>
								<Typography>{empValue.context}</Typography>
								{/* <Typography component="legend">Rating</Typography> */}
								<Rating
									name="customized-empty"
									defaultValue={empValue.answer}
									precision={0.5}
									emptyIcon={<StarBorderIcon fontSize="inherit" />}
								/>
							</Box>
						</Grid>
						<Divider variant="middle" />
					</React.Fragment>,
				);
			}
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
