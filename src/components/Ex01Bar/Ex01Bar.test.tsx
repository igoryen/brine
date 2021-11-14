/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex01Bar/Ex01Bar.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex01Bar from './Ex01Bar'

describe('<Ex01Bar />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex01Bar />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
