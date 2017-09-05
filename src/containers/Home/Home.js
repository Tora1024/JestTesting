import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import styles from './home.css';
import fetchPosts from '../../actions/fetchPosts';
import selectPostsAction from '../../actions/selectPosts';
import Post from '../../components/SinglePost/Post';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
		this.props.fetchPosts();

    this.selectPosts = this.selectPosts.bind(this);
  }

  selectPosts(isSelected) {
    this.props.selectPostsAction(isSelected);
  }

  renderPosts(selectedList) {
    const { posts } = this.props;
    return _.isEmpty(posts) ? ''
    : this.mapPosts(posts, selectedList);
  }

  mapPosts(posts, selectedList) {
    const { selected } = this.props;

    return _.map(posts, (post, index) => {

      if (selectedList === 'regular') {
        if (!selected.hasOwnProperty(post.id) || (selected.hasOwnProperty(post.id) && !selected[post.id]) ) {
          return (
            <div key={index}>
              <Post post={post} options='simple' onSelected={this.selectPosts} checked={this.props.selected}/>
            </div>
          );
        }

      } else if (selectedList === 'selected') {
        if (selected.hasOwnProperty(post.id) && selected[post.id]) {
          return (
            <div key={index}>
              <Post post={post} options='simple' onSelected={this.selectPosts} checked={this.props.selected}/>
            </div>
          );
        }
      }
    });
  }

  render() {
    return (
      <div styleName='container'>
        <div styleName='add_new'>
          <Link styleName='nav-item' to='/new'>Add New Post</Link>
        </div>
        <h2 styleName='headline'>Selected Posts:</h2>
        <section styleName='selected_posts'>
          <div styleName='overlay'>
            <div styleName='shadowContainer'>
              <div className={`${styles.shadow} ${styles.linearShadowTop}`}></div>
              <div className={`${styles.shadow} ${styles.linearShadowBottom}`}></div>
            </div>
            <div styleName="content">
              <div styleName="shadowCoverTop"></div>
              <div styleName="text">
                {this.renderPosts('selected')}
              </div>
              <div styleName="shadowCoverBottom"></div>
            </div>
          </div>
        </section>
        <h2 styleName='headline'>Recent Posts:</h2>
        <section styleName='recent_posts'>
          <div styleName='overlay'>
            <div styleName='shadowContainer'>
              <div className={`${styles.shadow} ${styles.linearShadowTop}`}></div>
              <div className={`${styles.shadow} ${styles.linearShadowBottom}`}></div>
            </div>
            <div styleName="content">
              <div styleName="shadowCoverTop"></div>
              <div styleName="text">
                {this.renderPosts('regular')}
              </div>
              <div styleName="shadowCoverBottom"></div>
            </div>
          </div>
        </section>
      </div>
		);
  }
}

function mapStateToProps(state) {
  const selected = _.isEmpty(state.selected_posts) ? { selected: false } : state.selected_posts;
	return { posts: state.posts, selected };
}

Home.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  selectPostsAction: PropTypes.func,
  selected: PropTypes.object,
}

export default connect(mapStateToProps, { fetchPosts, selectPostsAction })(CSSModules(Home, styles));
