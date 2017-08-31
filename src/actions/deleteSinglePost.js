import actionTypes from '../constants/actionTypes';
import axios from 'axios';
import ROOT_URL from '../constants/rootUrl';
import API_KEY from '../constants/apiKey';

const deleteSinglePostSuccess = (dispatch, success, id) => {
	dispatch({
		type: actionTypes.delete_posts_Success,
		payload: id,
	});
  return success;
}

const deleteSinglePostError = (dispatch, error) => {
	dispatch({
		type: actionTypes.delete_posts_Failure,
		error,
	});
  return error;
}

const deleteSinglePost = (id, callback) => {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return async (dispatch) => {
		try {
      const success = await request;
      callback();
      return deleteSinglePostSuccess(dispatch, success, id);
    } catch (error) {
      return deleteSinglePostError(dispatch, error);
    }
	}
};

export default deleteSinglePost;