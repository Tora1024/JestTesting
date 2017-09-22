import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './post.css';

class Post extends Component {
	constructor(props) {
		super(props);

		const { id } = this.props.post;
		const { selected } = this.props;

		const selectedState = selected === undefined 
		? 
			(this.props.checked[id] === undefined ? false : this.props.checked[id]) 
		: selected;

		this.state = { checked: selectedState };

		this.onSelectedClick = this.onSelectedClick.bind(this);
		this.toggleChecked = this.toggleChecked.bind(this);
	}

	toggleChecked() {
		if (this.state.checked) {
			this.setState({
					checked: false
				},
				this.props.onSelected({ id: this.props.post.id, selected: false })
			)
		} else {
			this.setState({
					checked: true
				},
				this.props.onSelected({ id: this.props.post.id, selected: true })
			)	
		}
	}

	onSelectedClick() {
		this.toggleChecked();
	}

	renderOption(options) {
		const { id, title, categories, content } = this.props.post;

		if (options === 'simple') {
			return (
				<main styleName='container-simple'>
					<div styleName='left-side'>
						<input styleName='checkbox' type='checkbox' checked={this.state.checked} onChange={this.onSelectedClick}></input>
						<h3 styleName='title-single'>{title}</h3>
					</div>
					<Link styleName='nav-post' to={`/${id}`}>Go to this Post</Link>
				</main>
			);
		}	else if ( options === 'detailed' ) {
			return (
				<main styleName='container-detailed'>
					<h3 styleName='title'>{title}</h3>
					<section styleName='categories'>{categories}</section>
					<article styleName='content'>{content}</article>
				</main>
			);
		}
	}

	render() {
		return (
			this.renderOption(this.props.options)
		);
	}
}

Post.propTypes = {
  post: PropTypes.object,
  options: PropTypes.string,
  onSelected: PropTypes.func,
  checked: PropTypes.object,
}

export default CSSModules(Post, styles);
