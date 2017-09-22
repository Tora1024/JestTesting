import React from 'react';
import { shallow } from 'enzyme';
import ComponentUnderTest from '../Post';

describe('components/SinglePost/SinglePost.js', () => {
  let wrapper;

  let commonProperties = {
		post: {
    	"id": 129737,
      "title": "First Post",
      "categories": "General",
      "content": "Hello World!",
    },
    selected: false,
  };

  describe('in general', () => {
    beforeEach(() => {
      wrapper = shallow(<ComponentUnderTest {...commonProperties} />);
    });
    it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
