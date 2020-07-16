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
<<<<<<< HEAD
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StylesProvider jss={jss}>
				<App />
			</StylesProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 9c13e8c0c5a524e52c1ad36708242186ce78bf4e
);

