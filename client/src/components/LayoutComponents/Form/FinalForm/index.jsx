import React, { Fragment } from 'react';
import { Typography, TextField, Divider, Grid, Box } from '@material-ui/core';

// import useStyles from './';
import context from '../Context';

export default () => {
	return (
		<context.Consumer>
			{(selectedQuestions, questions) => {
				return (
					<Fragment>
						<Typography>under construction</Typography>
					</Fragment>
				);
			}}
		</context.Consumer>
	);
};
