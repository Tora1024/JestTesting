import React from 'react';
import { shallow } from 'enzyme';
import ComponentUnderTest from '../NewPost';

describe('containers/NewPost/NewPost.js', () => {
  let wrapper;

  describe('in general', () => {
    beforeEach(() => {
      wrapper = shallow(<ComponentUnderTest />);
    });
    it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
