import actionTypes from '../../constants/actionTypes';

const reducerSelectedPosts = (state = {}, action) => {

	switch (action.type) {
		case actionTypes.select_posts:
			return { ...state, [action.payload.id]: action.payload.selected };
		default:
			return state;
	}
};

export default reducerSelectedPosts;