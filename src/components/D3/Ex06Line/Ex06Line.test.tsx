/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex06Line/Ex06Line.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex06Line from './Ex06Line'

describe('<Ex06Line />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex06Line />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
