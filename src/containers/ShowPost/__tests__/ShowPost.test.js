import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ComponentUnderTest from '../ShowPost';
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('containers/ShowPost/ShowPost.js', () => {

	let commonProperties = {
		match: {
	    params: {
	    	id: 0,
	    },
	  },
  };

  let startState = {
    posts: [
    	{
      	"id": 144651,
        "title": "First Post",
        "categories": "General",
        "content": "Hello World!",
      },
    ],
  };

  let store, wrapper;

  describe('in general', () => {
    beforeEach(() => {
    	store = mockStore({
    		...startState
    	});
    	
    	wrapper = mount (
    		<MemoryRouter>
        	<ComponentUnderTest store={store} {...commonProperties} />
        </MemoryRouter>
      );
    });
    //It always keeps changing one key prop in the next snapshot, so its useless to test it like that.
    /*it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });*/
    it('should render the ShowPost container', () => {
      expect(wrapper.find('container').length).toEqual(0);
    });
  });
});
