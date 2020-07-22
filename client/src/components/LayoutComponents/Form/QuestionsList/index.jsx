import React, { Fragment } from 'react';
import {
	Checkbox,
	FormControlLabel,
	List,
	ListItem,
	ListItemText,
	Divider,
	Grid,
} from '@material-ui/core';
import useStyles from './style';

export default (props) => {
	const classes = useStyles();

	return (
		<Fragment>
			<List
				component="nav"
				className={classes.root}
				aria-label="Questions List"
			>
				<ListItem>
					<Grid container>
						<Grid item>
							<FormControlLabel
								control={
									<Checkbox
										checked={Boolean(
											props.selectedQuestions[props.question.id],
										)}
										onChange={() => props.handleCheckQuestion(props.question)}
										name={props.question.context}
										color="primary"
										size="medium"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								}
								key={props.index}
							/>
						</Grid>
						<Grid item>
							<ListItemText
								disableTypography={true}
								className={classes.question}
								primary={props.question.context}
							/>
						</Grid>
					</Grid>
				</ListItem>
			</List>
			<Divider />
		</Fragment>
	);
};
