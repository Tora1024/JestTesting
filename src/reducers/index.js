import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import PostsReducer from './reducerPosts/reducerPosts';

export default combineReducers({
	posts: PostsReducer,
	routing,
	form,
});
