import React, { Component, Fragment } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure Firebase.
const config = {
	apiKey: 'AIzaSyBTGy1XdDcKJzsG7WvNp6A5SV1rDYRYwq8',
	authDomain: 'hmr-d5ea5.firebaseapp.com',
	// ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/dashboard',
	// We will display Google and Facebook as auth providers.
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
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
