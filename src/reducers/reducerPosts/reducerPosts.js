import actionTypes from '../../constants/actionTypes';
import _ from 'lodash';

const reducerPosts = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.fetch_posts_Success:
			//return _.mapKeys(action.payload.data, 'id');
			return  [...action.payload.data];
		default:
			return state;
	}
};

export default reducerPosts;