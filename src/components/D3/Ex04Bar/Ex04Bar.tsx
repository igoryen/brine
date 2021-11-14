/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex04Bar/Ex04Bar.tsx

Created with;
$ npx generate-react-cli component Ex04Bar --type=d3

*/

import React, { 
  // useState, 
  useEffect, RefObject } from 'react'
import './Ex04Bar.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex04Bar = () /* or ( props : IEx04BarProps ) */ => {
  // const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {
   
  }

  return (
    <div className="learnD3 Ex04Bar" ref={ref} />
  )
}

/*
interface IEx04BarProps {
  // TODO
}
*/

export default Ex04Bar
