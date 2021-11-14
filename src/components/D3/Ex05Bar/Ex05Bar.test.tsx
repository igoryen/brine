/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex05Bar/Ex05Bar.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex05Bar from './Ex05Bar'

describe('<Ex05Bar />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex05Bar />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
