const Style = (theme) => ({
	paper: {
		background: '#E4DDDD',
		width: 1170,
		height: '100%',
		[theme.breakpoints.down('1160')]: {
			height: 532,
			width: 933,
		},
	},
	box: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	image: {
		height: '100%',
		[theme.breakpoints.down('1160')]: {
			width: 350,
			height: 532,
		},
	},
});

export default Style;
