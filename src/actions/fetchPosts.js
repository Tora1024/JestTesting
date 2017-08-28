import actionTypes from '../constants/actionTypes';
import axios from 'axios';
import ROOT_URL from '../constants/rootUrl';
import API_KEY from '../constants/apiKey';

const fetchPostsSuccess = (dispatch, success) => {
	dispatch({
		type: actionTypes.fetch_posts_Success,
		payload: success,
	});
  return success;
}

const fetchPostsError = (dispatch, error) => {
	dispatch({
		type: actionTypes.fetch_posts_Failure,
		error,
	});
  return error;
}

const fetchPosts = () => {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return async (dispatch) => {
		try {
      const success = await request;
      return fetchPostsSuccess(dispatch, success);
    } catch (error) {
      return fetchPostsError(dispatch, error);
    }
	}
};

export default fetchPosts;
