import React from 'react'
import './App.scss'
import Ex01Bar from './components/D3/Ex01Bar/Ex01Bar'
import Ex02Circles from './components/D3/Ex02Circles/Ex02Circles'
import Ex03Text from './components/D3/Ex03Text/Ex03Text'
import Ex04Bar from './components/D3/Ex04Bar/Ex04Bar'
import Ex05Bar from './components/D3/Ex05Bar/Ex05Bar'
import Ex07Scatterplot from './components/D3/Ex07Scatterplot/Ex07Scatterplot'
import Ex08CsvData from './components/D3/Ex08CsvData/Ex08CsvData'


function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Ex08CsvData />
      <Ex07Scatterplot />
      <Ex05Bar />
      <Ex04Bar />
      <Ex03Text />
      <Ex02Circles />
      <Ex01Bar />
    </div>
  )
}

export default App
