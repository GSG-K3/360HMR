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
		display: 'flex',
		width: '94%',
		display: 'flex',
		height: '120px',
		margin: theme.spacing(6),
	},
	theSeclist: {
		display: 'flex',
		width: '94%',
		display: 'flex',
		alignItems: 'flex-end',
		height: '90px',
		margin: theme.spacing(6),
	},
	list: {
		width: '80%',

		marginRight: theme.spacing(15),
	},
	ItemText: {
		marginLeft: theme.spacing(85),
	},
}));
