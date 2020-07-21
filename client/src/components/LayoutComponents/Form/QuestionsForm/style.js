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
}));

export default useStyles;
