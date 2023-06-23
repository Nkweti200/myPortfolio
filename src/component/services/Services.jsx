import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './services.css'

const Services = () => {
  const [services, setService] = useState([])

  useEffect (() => {
    axios.get('http://localhost:5000/api/service')
      .then((response) => {setService(response.data)}, [])
  })
  return (
    <div>
         <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      {
        services.map((s) => (
          <div key={s.id}>
            <h2>{s.title}</h2>
            <p>{s.description}</p>
          </div>
        ))
      }
      </div>
    </section>
    </div>
  )
}

export default Services;