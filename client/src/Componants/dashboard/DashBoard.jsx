import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Grid, Typography } from '@material-ui/core';

import NewMember from './NewMember';
import History from './History';
import { PhotoCamera } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		justifyContent: 'flex-end',
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function SimpleTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
					justifyContent="space-between"
				>
					{/* <IconButton
						color="secondary"
						aria-label="upload picture"
						component="span"
					>
						<PhotoCamera />
					</IconButton> */}

					<Tab label="تاريخ" {...a11yProps(0)} />
					<Tab label="انشاء تقرير" {...a11yProps(1)} />
					<Tab label="اضافه موظف" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<History />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				<NewMember />
			</TabPanel>
		</div>
	);
}
