import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import PostsReducer from './reducerPosts/reducerPosts';

export default combineReducers({
	posts: PostsReducer,
	routing,
});
