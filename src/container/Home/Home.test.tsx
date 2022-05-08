import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import render from 'react-test-renderer';
import Home from './Home.page';

afterEach(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  // MOCK MATH RANDOM
  jest.spyOn(global.Math, 'random').mockReturnValue(1);
});

describe('HomePage Container Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = render.create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      );
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
