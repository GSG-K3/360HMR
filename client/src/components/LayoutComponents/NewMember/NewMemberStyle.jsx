import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
	form: {
		'& .MuiTextField-root': {
			width: '25ch',
		},
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},

	media: {
		height: 70,
		paddingTop: '56.25%',
		width: 400,
		alignContent: 'center',
		marginRight: theme.spacing(2),
		marginTop: theme.spacing(5),
	},
	mainBox: {
		margin: theme.spacing(9),
	},
	root: {
		'text-align': 'center',
	},
	theform: {
		spacing: '2',
		display: ' flex',
		direction: 'row',
		flexWrap: 'wrap',
	},
	card: {
		height: 550,

		backgroundColor: theme.palette.secondary.light,
	},
	fullWidth: { width: 250 },
}));
