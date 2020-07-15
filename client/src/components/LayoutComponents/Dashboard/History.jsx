import React, { useState, useEffect } from 'react';
import {
	TextField,
	Button,
	Box,
	List,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import LoaderProgress from '../../CommonComponents/LoaderProgress';
import { Person } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		display: 'flex',
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

export default function AddNewMember() {
	const classes = useStyles();
	const [employees, setEmployees] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		axios
			.get('/api/employees')
			.then((result) => {
				const emp = { ...result.data.data };
				setEmployees(emp);
			})
			.catch((err) => {
				console.log({ ...err });
				if (err.response.data) swal('Error', err.response.data.messag, 'error');
			});
	}, []);
	const handleClick = () => {
		// return <Redirect push to="/dashboard/history/${employee name}" />;
	};
	const buildList = (employee) => {
		const empNames = [];
		if (!employee) {
			return empNames;
		}
		const keyLength = Object.keys(employee).length;
		for (let emp of Object.keys(employee)) {
			const empValue = employee[emp];

			empNames.push(
				<React.Fragment>
					<ListItem alignItems="center">
						<ListItemAvatar>
							{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
							<Person color="disabled" fontSize="large" />
						</ListItemAvatar>
						<ListItemText primary={empValue.name} display="flex" />
						<Button onClick={handleClick}>view</Button>
					</ListItem>

					<Divider variant="fullWidth" component="li" />
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
			<List>{buildList(employees)}</List>
		</Box>
	);
}
