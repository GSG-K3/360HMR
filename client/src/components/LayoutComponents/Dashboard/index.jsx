import React, { Fragment, Component } from 'react';
import fire from '../../CommonComponents/SignIn/fire';

class Dashboard extends Component {
	state = { user: {} };

	componentDidMount() {
		fire.auth().onAuthStateChanged((user) => {
			this.setState({ user: user });
		});
	}
	signOut = () => {
		fire.auth().signOut();
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
