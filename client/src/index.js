import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Grid } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/MaterialUiTheme';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<React.StrictMode>
			<Grid container direction="column">
				<App />
			</Grid>
		</React.StrictMode>
	</MuiThemeProvider>,
	document.getElementById('root'),
);
