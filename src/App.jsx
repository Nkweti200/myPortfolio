import React,  { useEffect, useState } from 'react'
import './App.css'

import Header from './component/header/Header'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Testimonial from './component/testimonial/Testimonial'
import Footer from './component/footer/Footer'

const App = () => {

  const[backendData, setBackendData] = useState([{}])

useEffect(() => {
fetch("/api").then(
  response => response.json()
).then(
  data =>{
    setBackendData(data)
  }
)
}, [])
  return (
    <div className='App'>
      <Header />
      <About />
      <Contact />
      <Experience />
      <Testimonial/>
      <Footer />
    </div>
  )
}

export default App