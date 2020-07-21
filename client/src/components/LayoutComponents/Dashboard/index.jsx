import React, { Fragment, Component } from 'react';
import fire from '../../CommonComponents/SignIn/fire';
import { AuthContext } from '../../../Auth';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	state = { user: {} };

	componentDidMount() {
		const { currentUser } = this.context;
		if (!currentUser) return this.props.history.push('/');
		fire.auth().onAuthStateChanged((user) => {
			this.setState({ user: user });
		});
	}
	signOut = () => {
		localStorage.removeItem('firebaseui::rememberedAccounts');
		fire.auth().signOut();
		return <Redirect to="/" />;
	};
	render() {
		return (
			<Fragment>
				<h1>Welcome to your Dashboard {this.state.user.displayName}</h1>
				<button onClick={this.signOut}>Sign Out</button>
			</Fragment>
		);
	}
}
Dashboard.contextType = AuthContext;
export default Dashboard;
