import React from 'react'
import Form from '../Components/Form'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  return (
    <>
      <h2>CONTACT Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact