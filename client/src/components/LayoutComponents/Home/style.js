const Style = (theme) => ({
	paper: {
		background: '#E4DDDD',
		width: 1170,
		height: 765,
		[theme.breakpoints.down('1160')]: {
			height: 532,
			width: 933,
		},
	},
	box: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		height: '100%',
	},
	image: {
		height: '100%',
		[theme.breakpoints.down('1160')]: {
			width: 350,
			height: 532,
		},
	},
	container: {
		height: '100%',
	},
	header: {
		fontFamily: theme.fontFamily,
		letterSpacing: 1,
		textAlign: 'inherit',
	},
	textContainer: {
		marginBottom: 96,
	},
});

export default Style;
