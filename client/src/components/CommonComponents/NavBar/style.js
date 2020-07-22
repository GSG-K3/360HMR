import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hidden: {
		display: 'none',
	},
	NavBarContainer: {
		marginBottom: 50,
	},
}));

export default useStyles;
