import React, { Fragment, Component } from 'react';
import {
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	Button,
	FormControl,
} from '@material-ui/core';
import axios from 'axios';

class Form extends Component {
	state = {
		questionOne: false,
		questionTwo: false,
		questionThree: false,
		questionFour: false,
		questionFive: false,
		newQuestion: '',
		type: '',
		Error: '',
	};

	handleChange = (event) => {
		let { name, value, type, checked } = event.target;
		type === 'checkbox'
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	};
	handleSelect = (event) => {
		this.setState({ type: event.target.value });
	};
	handleClick = (event) => {
		event.preventDefault();
		axios
			.post('/api/dashboard/form', {
				content: this.state.newQuestion,
				type: this.state.type,
			})
			.then(({ data }) => {
				if (!data.message) return this.setState({ Error: data.message });
				console.log(data.message);
			})
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<Fragment>
				<Grid>
					<FormControlLabel
						control={
							<Checkbox
								checked={this.state.questionOne}
								onChange={this.handleChange}
								name="questionOne"
								color="primary"
							/>
						}
						label="questionOne"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={this.state.questionTwo}
								onChange={this.handleChange}
								name="questionTwo"
								color="primary"
							/>
						}
						label="questionTwo"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={this.state.questionThree}
								onChange={this.handleChange}
								name="questionThree"
								color="primary"
							/>
						}
						label="questionThree"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={this.state.questionFour}
								onChange={this.handleChange}
								name="questionFour"
								color="primary"
							/>
						}
						label="questionFour"
					/>
				</Grid>
				<Grid>
					<TextField
						id="outlined-basic"
						label="write a question ..."
						variant="outlined"
						name="newQuestion"
						onChange={this.handleChange}
					/>
				</Grid>
				<Grid>
					<FormControl>
						<InputLabel id="select-label">Type</InputLabel>
						<Select
							labelId="select-label"
							id="demo-simple-select"
							label="Type"
							value={this.state.type}
							onChange={this.handleSelect}
							ref={this.inputRef}
						>
							<MenuItem value="Rate">Rate</MenuItem>
							<MenuItem value="Content">Content</MenuItem>
							<MenuItem value="Mullti">Mullti</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid>
					<br></br>
					<Button
						variant="contained"
						color="secondary"
						onClick={this.handleClick}
					>
						Submit
					</Button>
				</Grid>
			</Fragment>
		);
	}
}

export default Form;
