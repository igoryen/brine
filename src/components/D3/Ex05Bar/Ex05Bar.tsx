/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex05Bar/Ex05Bar.tsx

Created with;
$ npx generate-react-cli component Ex05Bar --type=d3

*/

import React, { 
  // useState, 
  useEffect, RefObject } from 'react'
import './Ex05Bar.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex05Bar = () /* or ( props : IEx05BarProps ) */ => {
  // const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {
    
  }
  return (
    <div className="learnD3 Ex05Bar" ref={ref} />
  )
}

/*
interface IEx05BarProps {
  // TODO
}
*/

export default Ex05Bar
