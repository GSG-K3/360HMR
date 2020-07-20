import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NewMember from './components/LayoutComponents/Dashboard/NewMember';
import History from './components/LayoutComponents/Dashboard/History';
import Home from './components/LayoutComponents/Home';
import Dashboard from './components/LayoutComponents/Dashboard';

function App() {
	return (
		<div className="App">
			<Router>
				<Grid direction="column" container className="Container">
					<Grid item xs={12}>
						{/* Header */}
					</Grid>
					<Grid item container className="Container">
						<Grid item xs={false} md={1} className="Container"></Grid>
						<Grid
							item
							container
							xs={12}
							md={10}
							direction="row"
							justify="center"
							className="Container"
						>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/dashboard" exact component={Dashboard} />
								<Route
									exact
									path="/dashboard/new-employee"
									component={NewMember}
								/>
								<Route path="/dashboard/history" exact component={History} />
							</Switch>
						</Grid>
						<Grid item xs={false} md={1} className="Container" />
					</Grid>
				</Grid>
			</Router>
		</div>
	);
}

export default App;
