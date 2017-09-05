import actionTypes from '../constants/actionTypes';

const select_posts = (select) => {
	return ({
		type: actionTypes.select_posts,
		payload: select,
	});
}

export default select_posts;
