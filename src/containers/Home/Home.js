import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import styles from './home.css';
import fetchPosts from '../../actions/fetchPosts';
import Post from '../../components/SinglePost/Post';

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
    return _.map(posts, (post, index) => {
      return (
        <div key={index}>
          <Post post={post} options='simple'/>
        </div>
      );
    });
  }

  render() {
    return (
      <div styleName='container'>
        <div styleName='add_new'>
          <Link styleName='nav-item' to='/new'>Add New Post</Link>
        </div>
        <h2 styleName='headline'>Recent Posts:</h2>
        <section styleName='recent_posts'>
          {this.renderPosts()}
        </section>
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