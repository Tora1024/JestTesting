import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import createPosts from '../../actions/createPosts';
import styles from './newPost.css';

class NewPost extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}
	
	renderField (field) {
		const { meta : { error, touched } } = field;
		const fieldStyle = (touched && error) ? styles.error_field : '';

		return (
			<div className={styles.post_field}>
				<label>{field.label}</label>
				<input
					type='text'
					{...field.input}
					className={fieldStyle}
				/>
				<label className={styles.error_msg}>{touched ? error : ''}</label>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPosts(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<main styleName='container'>
				<h3 styleName='title'>New Post</h3>
				<form styleName='form' onSubmit={handleSubmit(this.onSubmit)}>
					<Field
						label='Title'
						name='title'
						component={this.renderField}
					/>
					<Field
						label='Categories'
						name='categories'
						component={this.renderField}
					/>
					<Field
						label='Content'
						name='content'
						component={this.renderField}
					/>
					<div styleName='buttons'>
						<button type='submit' styleName='submit'>Submit</button>
						<Link to='/' styleName='cancel'>Cancel</Link>
					</div>
				</form>
			</main>
		);
	}
}

NewPost.propTypes = {
	handleSubmit: PropTypes.func,
	createPosts: PropTypes.func,
	history: PropTypes.object,
}

const validate = (values) => {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title';
	}

	if (!values.categories) {
		errors.categories = 'Enter a category';
	}

	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
};

export default reduxForm({
	validate,
	form: 'PostsNewForm',
})(
	connect(null, { createPosts })(CSSModules(NewPost, styles))
);
