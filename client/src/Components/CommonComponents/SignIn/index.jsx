import React, { Component, Fragment } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from './uiConfig';

// Configure Firebase.
const config = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	// ...
};
firebase.initializeApp(config);

class SignIn extends Component {
	state = { isSignedIn: false };
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({ isSignedIn: !!user });
		});
	}
	render() {
		return (
			<Fragment>
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			</Fragment>
		);
	}
}

export default SignIn;
