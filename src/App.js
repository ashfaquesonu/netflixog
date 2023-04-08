import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import {originals,Action, comedy, horror, romance } from './url'
import Banner from './components/Banner/Banner'
import Row from './components/Row/Row'




function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Row url={originals} title='Netflix Originals'/>
      <Row url={horror} title='Horror' isSmall/>
      <Row url={Action} title='Action' isSmall/>
      <Row url={romance} title='Romance' isSmall/>
      <Row url={comedy} title='Comedy' isSmall/>
     
      
      
      
      
      
    </div>
  )
}

export default App
