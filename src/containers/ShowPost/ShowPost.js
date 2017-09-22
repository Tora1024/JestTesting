import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import fetchSinglePost from '../../actions/fetchSinglePost';
import deleteSinglePost from '../../actions/deleteSinglePost';
import styles from './showPost.css';
import Post from '../../components/SinglePost/Post';

class ShowPosts extends Component {
	constructor(props) {
		super(props);

		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchSinglePost(id);
  }

  renderPost() {
    const { post } = this.props;
    return _.isEmpty(post) ? ''
    : <Post post={post} options='detailed' selected={false}/>;
  }

  onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deleteSinglePost(id, () => {
			this.props.history.push('/');
		});
  }

	render() {
		return (
			<main styleName='container'>
				<h2 styleName='title'>Recent Posts:</h2>
				<section styleName='show_post'>
					{this.renderPost()}
					<aside styleName='buttons'>
						<Link styleName='nav-home' to='/'>Back to Home</Link>
						<button styleName='nav-delete' onClick={this.onDeleteClick}>Delete Post</button>
					</aside>
				</section>
			</main>
		);
	}
}

ShowPosts.propTypes = {
	fetchSinglePost: PropTypes.func,
	match: PropTypes.object,
	post: PropTypes.object,
	deleteSinglePost: PropTypes.func,
	history: PropTypes.object,
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchSinglePost, deleteSinglePost })(CSSModules(ShowPosts, styles));
