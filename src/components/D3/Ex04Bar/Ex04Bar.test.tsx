/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex04Bar/Ex04Bar.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex04Bar from './Ex04Bar'

describe('<Ex04Bar />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex04Bar />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
