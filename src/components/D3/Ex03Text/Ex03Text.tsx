/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex03Text/Ex03Text.tsx

Created with;
$ npx generate-react-cli component Ex03Text --type=d3

*/

import React, {
  // useState,
  useEffect,
  RefObject,
} from 'react'
import './Ex03Text.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex03Text = () /* or ( props : IEx03TextProps ) */ => {
  // const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {
    d3.select(ref.current).append('svg')
      .attr('width', 250)
      .attr('height', 50)
      .append('text')
      .text('Easy-peasy')
      .attr('y', 25)
      .attr('x', 0)
  }

  return (
    <div className="learnD3 Ex03Text" ref={ref} />
  )
}

/*
interface IEx03TextProps {
  // TODO
}
*/

export default Ex03Text
