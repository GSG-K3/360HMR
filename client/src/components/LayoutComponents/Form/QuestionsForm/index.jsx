import React, { Fragment } from 'react';
import QuestionsTypeSelect from '../QuestionsTypeSelect';
import { Grid, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import context from '../Context';
import useStyles from './style';

export default () => {
	const classes = useStyles();
	return (
		<context.Consumer>
			{({
				handleChangeNewQuestionText,
				typeError,
				newQuestionType,
				handleSelectNewQuestionType,
				handleAddQuestionClick,
				handleNext,
			}) => {
				return (
					<Fragment>
						<Grid
							container
							justify="center"
							className={classes.form}
							spacing={2}
						>
							<Grid item container justify="center" alignItems="center">
								<Grid item className={classes.width}>
									<TextField
										id="outlined-basic"
										label="اكتب السؤال..."
										variant="outlined"
										name="newQuestionText"
										fullWidth={true}
										onChange={handleChangeNewQuestionText}
										className={classes.textfield}
									/>
								</Grid>
								<Grid item className={classes.select}>
									<QuestionsTypeSelect
										newQuestionType={newQuestionType}
										handleSelectNewQuestionType={handleSelectNewQuestionType}
									/>
								</Grid>
							</Grid>
							<Grid item container direction="row" justify="space-evenly">
								<Grid item>
									{typeError ? (
										<Alert severity="warning">{typeError}</Alert>
									) : null}
								</Grid>
								<Grid item className={classes.btnGrid}>
									<Button
										variant="contained"
										color="primary"
										onClick={handleAddQuestionClick}
										className={classes.btn}
									>
										اضافة السؤال
									</Button>
								</Grid>
								<Grid item>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.btn}
									>
										التالي
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Fragment>
				);
			}}
		</context.Consumer>
	);
};
