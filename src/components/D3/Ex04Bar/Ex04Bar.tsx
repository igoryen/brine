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
    const w = 300;
    const h = 100;
    const padding = 2;
    const dataset = [5, 10, 14, 20, 25];

    const svg = d3.select(ref.current).append('svg').attr('width', w).attr('height', h);

    const colorPicker = (value: number) => (value <= 20) ? '#666666' : '#ff0033';

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (w / dataset.length))
      .attr('y', (d) => h - (d*4))
      .attr('width', w / dataset.length - padding)
      .attr('height', (d) => d*4)
      .attr('fill', (d) => colorPicker(d))
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
