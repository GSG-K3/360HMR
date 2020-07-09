import React, { Fragment, Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class Dashboard extends Component {
	state = { user: {} };

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({ user: user });
		});
	}
	signOut = () => {
		firebase.auth().signOut();
		return this.props.history.push('/');
	};
	render() {
		return (
			<Fragment>
				<h1>Welcome to your Dashborad {this.state.user.displayName}</h1>
				<button onClick={this.signOut}>Sign Out</button>
			</Fragment>
		);
	}
}

export default Dashboard;
