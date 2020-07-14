import { createMuiTheme } from '@material-ui/core';
const Theme = createMuiTheme({
	direction: 'rtl',
	palette: {
		primary: { main: '#0D005B' },
		secondary: { main: '#160196' },
	},
	colors: {
		purpuleLight: '#3C327B',
		gray: '#E4DDDD',
		menuGray: '#C0C0C0',
	},
	fontFamily: 'Amiri, serif',
});
export default Theme;
