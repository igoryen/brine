/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Ex07Scatterplot/Ex07Scatterplot.tsx

Created with;
$ npx generate-react-cli component Ex07Scatterplot --type=d3

*/

import React, {
  // useState, 
  useEffect, RefObject
} from 'react'
import './Ex07Scatterplot.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const Ex07Scatterplot = () /* or ( props : IEx07ScatterplotProps ) */ => {
  // const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {
    const h = 350;
    const w = 400;

    const monthlyResults = [
      { "month": 10, "results": 100 },
      { "month": 20, "results": 130 },
      { "month": 30, "results": 250 },
      { "month": 40, "results": 300 },
      { "month": 50, "results": 265 },
      { "month": 60, "results": 225 },
      { "month": 70, "results": 180 },
      { "month": 80, "results": 120 },
      { "month": 90, "results": 145 },
      { "month": 100, "results": 130 }
    ];

    const resultsKPI = (d) => (d >= 250) ? "#33CC66" : "#666666";



    // create our SVG
    const svg = d3.select(ref.current).append("svg")
      .attr('width', w)
      .attr('height', h);

    // add dots
    svg.selectAll("circle")
      .data(monthlyResults)
      .enter()
      .append("circle")
      .attr('cx', d => d.month * 3)
      .attr('cy', d => h - d.results)
      .attr('r', 5)
      .attr("fill", d => resultsKPI(d.results));
  }

  return (
    <div className="learnD3 Ex07Scatterplot" ref={ref} />
  )
}

/*
interface IEx07ScatterplotProps {
  // TODO
}
*/

export default Ex07Scatterplot
