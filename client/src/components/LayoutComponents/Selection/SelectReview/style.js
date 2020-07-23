const useStyles = (theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	text: {
		fontFamily: theme.fontFamily,
	},
	option: {
		fontFamily: theme.fontFamily,
		letterSpacing: 1,
		textAlign: 'inherit',
		fontSize: 25,
	},
	select: {
		backgroundColor: 'white',
		height: 56,
		width: 400,
	},
	selectGrid: {
		paddingLeft: 76,
		width: 501,
	},
});

export default useStyles;
