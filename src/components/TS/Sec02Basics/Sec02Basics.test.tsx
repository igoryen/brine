import React from 'react';
import { shallow } from 'enzyme';
import Sec02Basics from './Sec02Basics';

describe('<Sec02Basics />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Sec02Basics />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
