/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex01Bar/Ex01Bar.tsx

Created with;
$ npx generate-react-cli component Ex01Bar --type=d3

*/

import React, { useState, useEffect, RefObject } from 'react'
import './Ex01Bar.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex01Bar = () /* or ( props : IEx01BarProps ) */ => {
  const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {

    const width = 100;
    const height = 100;
    const padding = 2;
    const dataset = [ 5, 10, 15, 20, 25];

    const svg = d3.select(ref.current).append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (width / dataset.length))
      .attr('d', (d) => height - (d*4))
      .attr('width', width / dataset.length - padding)
      .attr('height', (d) => d*4);

  }

  return (
    <div className="Ex01Bar" ref={ref} />
  )
}

/*
interface IEx01BarProps {
  // TODO
}
*/

export default Ex01Bar
