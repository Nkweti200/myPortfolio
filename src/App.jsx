import React from 'react'
import './App.css'

import Header from './component/header/Header'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <Contact />
      <Experience />
      <Footer />
    </div>
  )
}

export default App