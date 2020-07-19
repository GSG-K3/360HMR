import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './style';

export default function TabsComponent() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
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
			<Tab className={classes.text} label="اﻷرشيــــف" />
			<Tab className={classes.text} label="تقييم جديد" />
			<Tab className={classes.text} label="اضافة موظف جديد" />
		</Tabs>
	);
}
