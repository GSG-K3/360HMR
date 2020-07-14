import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, deepPurple } from '@material-ui/core/colors';
export default function createTheme() {
	return createMuiTheme({
		direction: 'rtl',
		palette: {
			primary: { main: '#673ab7' },
			secondary: { main: indigo[50], light: indigo[100] },
			info: { main: deepPurple[50] },
		},
	});
}
