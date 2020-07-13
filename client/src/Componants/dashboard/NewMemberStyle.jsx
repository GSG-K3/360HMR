import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
	form: {
		'& .MuiTextField-root': {
			margin: theme.spacing(3),
			width: '25ch',
		},
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	media: {
		height: 70,
		paddingTop: '56.25%', // 16:9
		width: 400,
		alignContent: 'center',
		marginLeft: theme.spacing(2),
		marginTop: theme.spacing(5),

		// margin-left: 82px,
	},
	mainBox: {
		margin: theme.spacing(9),
		marginLeft: theme.spacing(9),
		// marginTop: theme.spacing(13),
		// marginRight: theme.spacing(9),
		// marginBottom: theme.spacing(3),
	},
	root: {
		// height: 653,
		// height: 550,
		'text-align': 'center',
	},
	theform: {
		spacing: '2',
		display: ' flex',
		direction: 'row',
		flexWrap: 'wrap',
	},
	card: {
		// height: 653,
		height: 550,
		// height: '100%',
		backgroundColor: theme.palette.primary.main,
	},
	fullWidth: { width: 250 },
}));
