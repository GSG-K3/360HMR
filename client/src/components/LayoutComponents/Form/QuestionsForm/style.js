import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		marginTop: 50,
		width: '100%',
	},
	width: {
		width: 400,
	},
	textfield: {
		backgroundColor: 'white',
		fontFamily: theme.fontFamily,
		letterSpacing: 1,
		textAlign: 'inherit',
	},
	btn: {
		width: 163,
		height: 62,
		fontSize: 20,
		textAlign: 'center',
	},
	btnGrid: {
		marginBottom: 20,
		marginRight: 50,
	},
}));

export default useStyles;
