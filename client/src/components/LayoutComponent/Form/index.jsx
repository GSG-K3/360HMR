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
import questions from './questions';

class Form extends Component {
	state = {
		questions: questions,
		newQuestion: '',
		type: '',
		Error: '',
	};

	handleChange = (index, event) => {
		let { name, value, type } = event.target;
		if (type === 'checkbox') {
			const newCheckedArry = this.state.questions.map((question) => {
				if (index === question.id) {
					question.checked = !question.checked;
				}
				return question;
			});

			return this.setState({ questions: newCheckedArry });
		}
		this.setState({ [name]: value });
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
				let lastId = this.state.questions.length - 1;
				lastId++;
				let json = {
					id: lastId,
					content: this.state.newQuestion,
					checked: false,
				};
				return this.setState((prevState) => {
					return { questions: [...prevState.questions, json] };
				});
			})
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<Fragment>
				<Grid>
					{this.state.questions.map((question, index) => {
						return (
							<FormControlLabel
								control={
									<Checkbox
										checked={question.checked}
										onChange={(event) => this.handleChange(index, event)}
										name={question.content}
										color="primary"
									/>
								}
								label={question.content}
								key={index}
							/>
						);
					})}
				</Grid>
				<Grid>
					<TextField
						id="outlined-basic"
						label="write a question ..."
						variant="outlined"
						name="newQuestion"
						onChange={(event) => this.handleChange(null, event)}
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
