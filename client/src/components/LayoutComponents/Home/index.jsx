import React, { Fragment } from 'react';
import SignIn from '../../CommonComponents/SignIn/index';
import { create } from 'jss';
import rtl from 'jss-rtl';
import {
	StylesProvider,
	jssPreset,
	ThemeProvider,
} from '@material-ui/core/styles';
import NavBar from '../../CommonComponents/NavBar';
import Theme from '../../../theme/MaterialUiTheme';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Home(props) {
	let { history } = props;
	return (
		<Fragment>
			<ThemeProvider theme={Theme}>
				<StylesProvider jss={jss}>
					<NavBar history={history} />
					<SignIn />
				</StylesProvider>
			</ThemeProvider>
		</Fragment>
	);
}

export default Home;
