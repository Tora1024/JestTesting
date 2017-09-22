import React from 'react';
import { shallow } from 'enzyme';
import ComponentUnderTest from '../Layout';

describe('components/Layout/Layout.js', () => {
  let wrapper, renderLayout;

  describe('in general', () => {
  	ComponentUnderTest.renderLayout = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<ComponentUnderTest />);
    });
    it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});