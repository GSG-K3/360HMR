import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/MaterialUiTheme';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StylesProvider jss={jss}>
				<App />
			</StylesProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
