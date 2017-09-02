import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './post.css';

const Post = ({post, options}) => {
	if (options === 'simple') {
		return (
			<main styleName='container-simple'>
				<h3 styleName='title'>{post.title}</h3>
				<Link styleName='nav-post' to={`/${post.id}`}>Go to this Post</Link>
			</main>
		);
	}	else if ( options === 'detailed' ) {
		return (
			<main styleName='container-detailed'>
				<h3 styleName='title'>{post.title}</h3>
				<section styleName='categories'>{post.categories}</section>
				<article styleName='content'>{post.content}</article>
			</main>
		);
	}
};

Post.propTypes = {
  post: PropTypes.object,
  options: PropTypes.string,
}

export default CSSModules(Post, styles);