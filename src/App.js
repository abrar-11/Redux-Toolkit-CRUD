import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import Home from './Pages/Home'
import ViewStudent from './Pages/ViewStudent'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'  element ={<Home/>} />
        <Route path='/view/:id'  element ={<ViewStudent/>} />
        <Route path='/add'  element ={<Add/>} />
      </Routes>
    </Router>
  )
}

export default App