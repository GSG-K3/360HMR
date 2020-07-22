import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './style';
import { withRouter } from 'react-router-dom';

function TabsComponent(props) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (event, index) => {
		event.preventDefault();
		if (index === 0) return props.history.push('/dashboard/history');
		else if (index === 1) return props.history.push('/dashboard/form');
		else if (index === 2) return props.history.push('/dashboard/new-employee');
	};

	const classes = useStyles();

	return (
		<Tabs
			value={value}
			indicatorColor="secondary"
			textColor="primary"
			onChange={handleChange}
			aria-label="tabs"
			variant="fullWidth"
		>
			<Tab
				className={classes.text}
				label="اﻷرشيــــف"
				onClick={(event) => handleClick(event, 0)}
			/>
			<Tab
				className={classes.text}
				label="تقييم جديد"
				onClick={(event) => handleClick(event, 1)}
			/>
			<Tab
				className={classes.text}
				label="اضافة موظف جديد"
				onClick={(event) => handleClick(event, 2)}
			/>
		</Tabs>
	);
}

export default withRouter(TabsComponent);
