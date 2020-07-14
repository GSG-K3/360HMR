import React, { Fragment } from 'react';
import SignIn from '../../CommonComponents/SignIn/index';
import MenuBar from '../../CommonComponents/MenuBar';

function Home() {
	return (
		<Fragment>
			<MenuBar />
			<SignIn />
		</Fragment>
	);
}

export default Home;
