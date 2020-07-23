import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},

	listItem: {
		width: '90%',
		display: 'flex',
		height: '120px',
		margin: theme.spacing(6),
	},
	theSeclist: {
		display: 'flex',
		width: '90%',
		display: 'flex',
		alignItems: 'center',
		height: '100px',
		margin: theme.spacing(6),
	},
	list: {
		width: '100%',

		marginRight: theme.spacing(15),
	},
	ItemText: {
		marginRight: theme.spacing(55),
	},
}));
