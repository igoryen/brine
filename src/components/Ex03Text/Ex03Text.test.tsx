/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex03Text/Ex03Text.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex03Text from './Ex03Text'

describe('<Ex03Text />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex03Text />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
