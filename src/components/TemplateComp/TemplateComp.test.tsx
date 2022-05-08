import React from 'react';
import render from 'react-test-renderer';
import TemplateComp from './TemplateComp.comp';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Loading General Component Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = render.create(<TemplateComp />);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
