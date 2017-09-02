import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import createPosts from '../../actions/createPosts';
import styles from './newPost.css';
import FIELDS from '../../constants/FIELDS';

class NewPost extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
		this.renderField = this.renderField.bind(this);
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
	field: PropTypes.object,
}

const validate = (values) => {
	const errors = {};

	_.each(FIELDS, (field, name) => {	
		if (!values[name]) {
			errors[name] = field.error_msg
		}
	});

	return errors;
};

export default reduxForm({
	validate,
	form: 'PostsNewForm',
})(
	connect(null, { createPosts })(CSSModules(NewPost, styles))
);
