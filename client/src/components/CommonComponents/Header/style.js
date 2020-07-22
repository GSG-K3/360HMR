import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	hidden: {
		display: 'none',
	},
	headerOne: {
		backgroundColor: '#0D005B',
		height: 102,
		width: '100%',
	},
	headerTwo: {
		backgroundColor: theme.colors.purpuleLight,
		height: 53,
		width: ' 100%',
	},
	container: {
		height: 155,
	},
	title: {
		color: 'white',
		fontFamily: 'Amiri, serif',
		marginLeft: 150,
	},
}));

export default useStyles;
