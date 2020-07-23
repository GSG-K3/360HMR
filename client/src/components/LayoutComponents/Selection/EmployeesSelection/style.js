const Styles = (theme) => ({
	root: {
		width: '100%',
		height: 100,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	employee: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'Amiri, serif',
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		width: 921,
	},
	employeeListContainer: {
		marginTop: 100,
	},
	icon: {
		fontSize: '2.5rem',
	},
});

export default Styles;
