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
import Alert from '@material-ui/lab/Alert';
import Dialog from '../../CommonComponent/Dialog';

class Form extends Component {
	state = {
		questions: [],
		newQuestionText: '',
		newQuestionType: '',
		loading: true,
		error: '',
		typeError: '',
		selectedQuestions: {},
		submitDialogOpen: false,
	};

	componentDidMount = () => {
		axios
			.get('/dashboard/form')
			.then(({ data }) => {
				if (!data)
					return this.setState({
						loading: false,
						error: 'There was an error loading your data',
					});
				this.setState({ questions: data, loading: false });
			})
			.catch((err) =>
				this.setState({
					error: 'There was an error loading your data',
				}),
			);
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
	handleSelectNewQuestionType = (event) => {
		this.setState({ newQuestionType: event.target.value });
	};
	handleAddQuestionClick = (event) => {
		event.preventDefault();
		if (
			this.state.newQuestionType === '' ||
			this.state.newQuestionText === ''
		) {
			return this.setState({
				typeError:
					'Please insert the quesstion & choose the type of the Question!!',
			});
		}
		this.setState({ typeError: '' });
		axios
			.post('/api/dashboard/form', {
				content: this.state.newQuestionText,
				type: this.state.newQuestionType,
			})
			.then(({ data }) => {
				if (!data.message) return this.setState({ error: data.message });
				const newId = this.state.questions.length;
				let json = {
					id: newId,
					context: this.state.newQuestionText,
					checked: false,
				};
				return this.setState((prevState) => {
					return { questions: [...prevState.questions, json] };
				});
			})
			.catch((err) =>
				this.setState({ error: 'There was an error adding your question' }),
			);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ submitDialogOpen: true });
	};
	handleClose = () => {
		this.setState({ submitDialogOpen: false });
	};
	render() {
		return (
			<Fragment>
				<Grid>
					{this.state.loading ? (
						<h1>Please wait its loading </h1>
					) : this.state.error ? (
						<Alert severity="error">{this.state.error}</Alert>
					) : (
						this.state.questions.map((question, index) => {
							return (
								<FormControlLabel
									control={
										<Checkbox
											checked={question.checked}
											onChange={(event) => this.handleChange(index, event)}
											name={question.context}
											color="primary"
										/>
									}
									label={question.context}
									key={index}
								/>
							);
						})
					)}
				</Grid>
				<Grid>
					<TextField
						id="outlined-basic"
						label="write a question ..."
						variant="outlined"
						name="newQuestionText"
						onChange={(event) => this.handleChange(null, event)}
					/>
				</Grid>
				{this.state.typeError ? (
					<Alert severity="warning">{this.state.typeError}</Alert>
				) : null}
				<Grid>
					<FormControl>
						<InputLabel id="select-label">Type</InputLabel>
						<Select
							labelId="select-label"
							id="demo-simple-select"
							label="Type"
							value={this.state.newQuestionType}
							onChange={this.handleSelectNewQuestionType}
						>
							<MenuItem value="Rate">Rate</MenuItem>
							<MenuItem value="Content">Content</MenuItem>
							<MenuItem value="Mullti">Mullti</MenuItem>
						</Select>
					</FormControl>
					<Button
						variant="contained"
						color="secondary"
						onClick={this.handleAddQuestionClick}
					>
						Add Question
					</Button>
				</Grid>
				<Grid>
					<br></br>
					<Button
						variant="contained"
						color="secondary"
						onClick={this.handleSubmit}
					>
						Submit
					</Button>
				</Grid>
				<Grid>
					<Dialog
						open={this.state.submitDialogOpen}
						handleClose={this.handleClose}
					/>
				</Grid>
			</Fragment>
		);
	}
}

export default Form;
