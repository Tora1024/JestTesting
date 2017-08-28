import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import styles from './home.css';
import fetchPosts from '../../actions/fetchPosts';
import Post from '../../components/Post/Post';

class Home extends Component {
  componentDidMount() {
		this.props.fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    return _.isEmpty(posts) ? ''
    : this.mapPosts(posts);
  }

  mapPosts(posts) {
    return posts.map((post, index) => (
      <div key={index}>
        <Post post={post}/>
      </div>
    ));
  }

  render() {
    return (
      <div styleName='container'>
        <h2 styleName='headline'>Recent Posts:</h2>
        {this.renderPosts()}
      </div>
		);
  }
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

Home.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

export default connect(mapStateToProps, { fetchPosts })(CSSModules(Home, styles));