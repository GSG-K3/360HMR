import React, { Component } from 'react';
import SignIn from '../../CommonComponents/SignIn/index';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class Home extends Component {
	render() {
		return (
			<div>
				<StylesProvider jss={jss}>
					<SignIn />
				</StylesProvider>
			</div>
		);
	}
}

export default Home;
