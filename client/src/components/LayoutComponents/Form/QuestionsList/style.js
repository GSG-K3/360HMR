import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: 100,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	question: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'Amiri, serif',
	},
	input: {
		width: 39,
		height: 39,
	},
}));

export default useStyles;
