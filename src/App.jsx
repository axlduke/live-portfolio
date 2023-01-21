import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className={`bg-gray-900 w-full h-full`}>
      <Home/>
    </div>
  )
}

export default App