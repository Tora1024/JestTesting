import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './post.css';

const Post = ({post}) => {
  return (
    <main styleName='container'>
      <h3 styleName='title'>{post.title}</h3>
      <section styleName='categories'>{post.categories}</section>
      <article styleName='content'>{post.content}</article>
    </main>
  );
};

Post.propTypes = {
  post: PropTypes.object,
}

export default CSSModules(Post, styles);