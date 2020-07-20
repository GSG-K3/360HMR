import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//Configure Firebase.
const config = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	// ...
};

const fire = firebase.initializeApp(config);

export default fire;
