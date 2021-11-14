/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex02Circles/Ex02Circles.tsx

Created with;
$ npx generate-react-cli component Ex02Circles --type=d3

*/

import React, { useEffect, RefObject } from 'react'
import './Ex02Circles.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex02Circles = () /* or ( props : IEx02CirclesProps ) */ => {
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {

    const width = 200;
    const height = 200;
    d3.select(ref.current).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 25)
      .style('fill', 'purple') // string "pee-you-ar-pee-el-ee", not 'purple'
  }

  return (
    <div className="learnD3 Ex02Circles" ref={ref} />
  )
}

/*
interface IEx02CirclesProps {
  // TODO
}
*/

export default Ex02Circles
