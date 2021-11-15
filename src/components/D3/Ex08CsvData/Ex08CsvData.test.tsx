/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex08CsvData/Ex08CsvData.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Ex08CsvData from './Ex08CsvData'

describe('<Ex08CsvData />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Ex08CsvData />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
