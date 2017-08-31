import actionTypes from '../constants/actionTypes';
import axios from 'axios';
import ROOT_URL from '../constants/rootUrl';
import API_KEY from '../constants/apiKey';

const fetchSinglePostSuccess = (dispatch, success) => {
	dispatch({
		type: actionTypes.fetchSinglePost_Success,
		payload: success,
	});
  return success;
}

const fetchSinglePostError = (dispatch, error) => {
	dispatch({
		type: actionTypes.fetchSinglePost_Failure,
		error,
	});
  return error;
}

const fetchSinglePost = (id) => {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return async (dispatch) => {
		try {
      const success = await request;
      return fetchSinglePostSuccess(dispatch, success);
    } catch (error) {
      return fetchSinglePostError(dispatch, error);
    }
	}
};

export default fetchSinglePost;
