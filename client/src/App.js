import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/LayoutComponent/Form';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/dashboard/form" exact component={Form} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
