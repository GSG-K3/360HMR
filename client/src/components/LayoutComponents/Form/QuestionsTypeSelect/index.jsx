import React from 'react';
import {
	InputLabel,
	FormHelperText,
	NativeSelect,
	FormControl,
} from '@material-ui/core';
import useStyles from './style';

export default (props) => {
	const classes = useStyles();
	return (
		<FormControl className={classes.formControl}>
			<NativeSelect
				value={props.newQuestionType}
				onChange={props.handleSelectNewQuestionType}
				inputProps={{
					name: 'type',
					id: 'type-native-helper',
				}}
				fullWidth={true}
				className={classes.select}
			>
				<option value="" className={classes.option}>
					نوع السؤال
				</option>
				<option value="Write" className={classes.option}>
					نصي
				</option>
				<option value="Rate" className={classes.option}>
					تقييم
				</option>
			</NativeSelect>
		</FormControl>
	);
};
