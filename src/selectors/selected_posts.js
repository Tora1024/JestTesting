//Reselect selector
//Takes a list of posts and posts IDs, and picks out the selected Posts

import _ from 'lodash';
import { createSelector } from 'reselect';

const postSelector = state => state.posts;
const selectedPostsSelector = state => state.selected_posts;

const getPosts = (posts, selectedPostsIds) => {
	const selectedPosts = _.filter(
		posts,
		post => _.contains(selectedPostsIds.id, posts.id),
	);

	return selectedPosts;
};

export default createSelector(
	postSelector,
	selectedPostsSelector,
	getPosts,
);