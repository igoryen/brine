/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex08CsvData/Ex08CsvData.tsx

Created with;
$ npx generate-react-cli component Ex08CsvData --type=d3

*/

import React, { useState, useEffect, RefObject } from 'react'
import './Ex08CsvData.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex08CsvData = () /* or ( props : IEx08CsvDataProps ) */ => {
  const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {

  }

  return (
    <div className="Ex08CsvData" ref={ref} />
  )
}

/*
interface IEx08CsvDataProps {
  // TODO
}
*/

export default Ex08CsvData
