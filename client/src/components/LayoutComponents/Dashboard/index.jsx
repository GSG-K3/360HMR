import React, { Fragment, Component } from 'react';
import fire from '../../CommonComponents/SignIn/fire';
import { AuthContext } from '../../../Auth';

class Dashboard extends Component {
	state = { user: {} };

	componentDidMount() {
		const { currentUser } = this.context;
		if (!currentUser) return this.props.history.push('/');
		fire.auth().onAuthStateChanged((user) => {
			this.setState({ user: user });
		});
	}

	render() {
		return (
			<Fragment>
				<h1>Welcome to your Dashboard {this.state.user.displayName}</h1>
				<h1>This Page is under Construction! </h1>
			</Fragment>
		);
	}
}
Dashboard.contextType = AuthContext;
export default Dashboard;
