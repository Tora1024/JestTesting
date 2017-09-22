import React from 'react';
import { shallow } from 'enzyme';
import ComponentUnderTest from '../NotFound';

describe('components/NotFound/NotFound.js', () => {
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
