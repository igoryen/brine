/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex02Circles/Ex02Circles.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex02Circles from './Ex02Circles'

describe('<Ex02Circles />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex02Circles />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
