const Style = (theme) => ({
	paper: {
		background: '#E4DDDD',
		width: 1170,
		height: '83vh',
		[theme.breakpoints.down('1160')]: {
			// height: 532,
			width: 933,
		},
	},
	box: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		height: '83vh',
		marginTop: 30,
	},
	image: {
		height: '83vh',
		[theme.breakpoints.down('1160')]: {
			width: 350,
		},
	},

	header: {
		fontFamily: theme.fontFamily,
		letterSpacing: 1,
		textAlign: 'inherit',
		justifyContent: 'center'
	},
	textContainer: {
		marginBottom: 46,
	},
});

export default Style;
