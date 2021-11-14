/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex06Line/Ex06Line.tsx

Created with;
$ npx generate-react-cli component Ex06Line --type=d3

*/

import React, { 
  // useState, 
  useEffect, RefObject } from 'react'
import './Ex06Line.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex06Line = () /* or ( props : IEx06LineProps ) */ => {
  // const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {
   
  }

  return (
    <div className="learnD3 Ex06Line" ref={ref} />
  )
}

/*
interface IEx06LineProps {
  // TODO
}
*/

export default Ex06Line
