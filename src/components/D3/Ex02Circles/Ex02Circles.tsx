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
// import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex02Circles = () /* or ( props : IEx02CirclesProps ) */ => {
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })
  
  

  const draw = () => {

    // const width = 400;
    // const height = 400;

    // // const data = [25, 20, 10, 12, 15];
    // d3.csv('./data.csv').then(data => {
    //   data.forEach(d => {
    //     d.// = Number(d.month)
    //   })
    //   console.log('... ', data)
    // })

    // const svg = d3.select(ref.current).append('svg')
    //   .attr('width', width)
    //   .attr('height', height);

    // const circles = svg.selectAll('circle')
    //   .data(data);

    // circles.enter().append('circle')
    //   .attr('cx', (datum: unknown, index) => (index * 50) + 50)
    //   .attr('cy', 50)
    //   .attr('r', (datum: unknown) => 2 * datum.month)
    //   .style('fill', '#ffb3e6')
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
