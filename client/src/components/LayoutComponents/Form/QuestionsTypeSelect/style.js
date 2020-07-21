import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: 400,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	select: {
		backgroundColor: 'white',
		height: 75,
	},
	text: {
		color: 'black',
	},
	option: {
		fontFamily: theme.fontFamily,
		letterSpacing: 1,
		textAlign: 'inherit',
		fontSize: 25,
	},
}));

export default useStyles;
