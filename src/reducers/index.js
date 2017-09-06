import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import PostsReducer from './reducerPosts/reducerPosts';
import PostsSelectedReducer from './reducerPosts/reducerSelectedPosts';

export default combineReducers({
	posts: PostsReducer,
	selected_posts: PostsSelectedReducer,
	routing,
	form,
});
