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
    const w = 300;
    const h = 120;
    const padding = 2;
    const dataset = [ 5, 10, 13, 19, 21, 25, 11, 25, 22, 18, 7];
    const svg = d3.select(ref.current).append('svg')
      .attr('width', w)
      .attr('height', h);

    const colorPicker = (value: number) => (value <= 20) ? '#4d94ff' : '#ff0033';

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i: number) => i * (w / dataset.length))
      .attr('y', (d: number) => h - (d*4))
      .attr('width', w / dataset.length - padding)
      .attr('height', (d: number) => d*4)
      .attr('fill', (d: number) => colorPicker(d))

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
