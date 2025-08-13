import React from 'react'
import InteractiveWorkflow from './components/InteractiveWorkflow'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Process Workflow</h1>
        <p>Click-and-drag to pan, use the mouse wheel to zoom, or use the controls in the top right.</p>
      </header>
      <main className="App-main">
        <InteractiveWorkflow />
      </main>
    </div>
  )
}

export default App