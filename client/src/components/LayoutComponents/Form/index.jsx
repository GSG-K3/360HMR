import React, { Fragment, Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import uuid from 'react-uuid';
import LoaderProgress from '../../CommonComponents/Loader/LoaderProgress';
import QuestionsList from './QuestionsList';
import QuestionsForm from './QuestionsForm/index';
import context from './Context';
import Style from './style';
import { withStyles } from '@material-ui/core/styles';
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

	handleCheckQuestion = (question) => {
		this.setState({
			selectedQuestions: {
				...this.state.selectedQuestions,
				[question.id]: !this.state.selectedQuestions[question.id],
			},
		});
	};

	handleChangeNewQuestionText = (event) => {
		const { value } = event.target;

		this.setState({ newQuestionText: value });
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
				let json = {
					id: uuid(),
					type: this.state.newQuestionType,
					context: this.state.newQuestionText,
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
		const { classes } = this.props;
		return (
			<context.Provider
				value={{
					handleChangeNewQuestionText: this.handleChangeNewQuestionText,
					typeError: this.state.typeError,
					newQuestionType: this.state.newQuestionType,
					handleSelectNewQuestionType: this.handleSelectNewQuestionType,
					handleAddQuestionClick: this.handleAddQuestionClick,
					handleSubmit: this.handleSubmit,
				}}
			>
				<Fragment>
					<LoaderProgress isLoading={this.state.loading} />
					<Grid
						container
						direction="column"
						justify="center"
						alignContent="center"
					>
						<Grid
							item
							container
							direction="column"
							justify="center"
							alignContent="center"
							className={classes.questionListContainer}
						>
							<Paper elevation={3} className={classes.paper}>
								{this.state.error ? (
									<Alert severity="error">{this.state.error}</Alert>
								) : (
									this.state.questions.map((question, index) => {
										return (
											<QuestionsList
												key={index}
												index={index}
												selectedQuestions={this.state.selectedQuestions}
												question={question}
												handleCheckQuestion={this.handleCheckQuestion}
											/>
										);
									})
								)}
							</Paper>
						</Grid>
						<Grid
							item
							container
							direction="column"
							justify="center"
							className={classes.form}
						>
							<QuestionsForm />
						</Grid>
					</Grid>
				</Fragment>
			</context.Provider>
		);
	}
}

export default withStyles(Style)(Form);
