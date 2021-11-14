import React from 'react'
import './App.scss'
import Ex01Bar from './components/D3/Ex01Bar/Ex01Bar'
import Ex02Circles from './components/D3/Ex02Circles/Ex02Circles'
import Ex03Text from './components/D3/Ex03Text/Ex03Text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ex01Bar />
        <Ex02Circles />
        <Ex03Text />
      </header>
    </div>
  )
}

export default App
