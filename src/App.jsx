import React, { useContext } from 'react'
import Navbar from './component/Navbar/Navbar'
import './App.scss'
import Hero from './container/Hero/Hero'
// import Work from './container/Work/Work'
// import Skills from './container/Skills/Skills'
import Contact from './container/Contact/Contact'
import { Scroll } from './component/Scroll/Scroll'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { themeContext } from './Context/DataContext'
import Projects from './container/Projects/Projects'
import Articles from './container/Articles/Articles'
import About from './container/About/About'


const App = () => {
  const {mode} = useContext(themeContext)

  return (
    <div className='app' data-theme={mode}>
      <Navbar/>
      <Scroll /> 
      <Hero />
      <About />
      {/* <Work /> */}
      <Projects />
      <Articles />
      {/* <Skills /> */}
      <Contact />
    </div>
  )
}

export default App