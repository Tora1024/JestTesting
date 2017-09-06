import actionTypes from '../../constants/actionTypes';
import _ from 'lodash';

const reducerPosts = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.fetch_posts_Success:
			return _.mapKeys(action.payload.data, 'id');
		case actionTypes.fetchSinglePost_Success:
			return {...state, [action.payload.data.id]: action.payload.data };
		case actionTypes.delete_posts_Success:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default reducerPosts;