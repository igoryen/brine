import React from 'react'
import './App.scss'
import Ex01Bar from './components/D3/Ex01Bar/Ex01Bar'
import Ex02Circles from './components/D3/Ex02Circles/Ex02Circles'
import HelloD3 from './components/D3/HelloD3/HelloD3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ex01Bar />
        <Ex02Circles />
        <HelloD3 />
      </header>
    </div>
  )
}

export default App
