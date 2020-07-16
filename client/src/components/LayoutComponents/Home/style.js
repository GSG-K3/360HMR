const Style = (theme) => ({
	paper: {
		background: '#E4DDDD',
		width: 1170,
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
		[theme.breakpoints.down('1160')]: {
			width: 350,
			height: 532,
		},
	},
});

export default Style;
