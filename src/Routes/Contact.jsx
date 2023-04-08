import React from 'react'
import Form from '../Components/Form'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  return (
    <>
      <h3>Want to know more?</h3>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      </>
  )
}

export default Contact