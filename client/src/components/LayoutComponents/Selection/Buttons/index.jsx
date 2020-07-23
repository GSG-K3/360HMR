import React, { Fragment, Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import context from '../context';
import { withStyles } from '@material-ui/core/styles';
import Styles from './style';

class Buttons extends Component {
	render() {
		const { classes } = this.props;
		const { handleBack } = this.context;
		return (
			<Fragment>
				<Grid item className={classes.btnGrid}>
					<Button
						variant="contained"
						onClick={handleBack}
						className={classes.btn}
						classes={{ root: classes.color }}
					>
						رجوع
					</Button>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						color="primary"
						// onClick={handleNext}
						className={classes.btn}
					>
						نشر التقييم
					</Button>
				</Grid>
			</Fragment>
		);
	}
}

Buttons.contextType = context;
export default withStyles(Styles)(Buttons);
