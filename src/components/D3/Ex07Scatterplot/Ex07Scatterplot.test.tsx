/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex07Scatterplot/Ex07Scatterplot.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex07Scatterplot from './Ex07Scatterplot'

describe('<Ex07Scatterplot />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex07Scatterplot />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
