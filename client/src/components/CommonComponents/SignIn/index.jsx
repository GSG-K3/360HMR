import React, { Component, Fragment } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from './uiConfig';
import fire from './fire';
import './firebaseui-styling.global.css';

class SignIn extends Component {
	state = { isSignedIn: false };
	componentDidMount() {
		fire.auth().onAuthStateChanged((user) => {
			this.setState({ isSignedIn: !!user });
		});
	}
	render() {
		return (
			<Fragment>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
			</Fragment>
		);
	}
}

export default SignIn;
