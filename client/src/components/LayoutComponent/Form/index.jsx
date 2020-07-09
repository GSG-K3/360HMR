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
		newQuestion: '',
		type: '',
		loading: true,
		Error: '',
		typeError: '',
		open: false,
	};

	componentDidMount = () => {
		axios
			.get('/dashboard/form')
			.then(({ data }) => {
				if (!data) return this.setState({ Error: 'There is no data' });
				this.setState({ questions: data, loading: false });
			})
			.catch((err) => console.log(err));
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
		if (this.state.type === '' || this.state.newQuestion === '') {
			return this.setState({
				typeError:
					'Please insert the quesstion & choose the type of the Question!!',
			});
		} else {
			this.setState({ typeError: '' });
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
						context: this.state.newQuestion,
						checked: false,
					};
					return this.setState((prevState) => {
						return { questions: [...prevState.questions, json] };
					});
				})
				.catch((err) => console.log(err));
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		return (
			<Fragment>
				<Grid>
					{this.state.loading ? (
						<h1>Please wait its loading </h1>
					) : this.state.Error ? (
						<Alert severity="error">{this.state.Error}</Alert>
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
						name="newQuestion"
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
							value={this.state.type}
							onChange={this.handleSelect}
						>
							<MenuItem value="Rate">Rate</MenuItem>
							<MenuItem value="Content">Content</MenuItem>
							<MenuItem value="Mullti">Mullti</MenuItem>
						</Select>
					</FormControl>
					<Button
						variant="contained"
						color="secondary"
						onClick={this.handleClick}
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
					<Dialog open={this.state.open} handleClose={this.handleClose} />
				</Grid>
			</Fragment>
		);
	}
}

export default Form;
