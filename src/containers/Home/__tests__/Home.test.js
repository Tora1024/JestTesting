import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ComponentUnderTest from '../Home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('containers/Home/Home.js', () => {
  let store, wrapper;

  describe('in general', () => {
    beforeEach(() => {
    	store = mockStore();
      wrapper = shallow(<ComponentUnderTest store={store} />);
    });
    it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
