import React, { Fragment } from 'react';
import { Typography, TextField, Divider, Grid, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import useStyles from './style';

export default (props) => {
	const classes = useStyles();
	if (empValue.type === 'نصي') {
		return (
			<Fragment>
				<Grid className={classes.texts}>
					<Typography variant="h5">السؤال </Typography>
					<Typography>{props.selectedQuestions.context}</Typography>
					<TextField id="outlined-basic" variant="outlined" />
				</Grid>
				<Divider variant="middle" />

				<Divider />
			</Fragment>
		);
	}
	if (empValue.type === 'تقيمي') {
		return (
			<Fragment>
				<Grid className={classes.texts}>
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Typography variant="h5"> السؤال </Typography>
						<Typography>{props.selectedQuestions.context}</Typography>
						{/* <Typography component="legend">Rating</Typography> */}
						<Rating
							name="customized-empty"
							defaultValue={0}
							precision={0.5}
							emptyIcon={<StarBorderIcon fontSize="inherit" />}
						/>
					</Box>
				</Grid>

				<Divider />
			</Fragment>
		);
	}
};
