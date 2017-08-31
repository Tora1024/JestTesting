import actionTypes from '../constants/actionTypes';
import axios from 'axios';
import ROOT_URL from '../constants/rootUrl';
import API_KEY from '../constants/apiKey';

const createPostsSuccess = (dispatch, success) => {
	dispatch({
		type: actionTypes.create_posts_Success,
		payload: success,
	});
  return success;
}

const createPostsError = (dispatch, error) => {
	dispatch({
		type: actionTypes.create_posts_Failure,
		error,
	});
  return error;
}

const createPosts = (values, callback) => {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
	return async (dispatch) => {
		try {
      const success = await request;
      callback();
      return createPostsSuccess(dispatch, success);
    } catch (error) {
      return createPostsError(dispatch, error);
    }
	}
};

export default createPosts;
