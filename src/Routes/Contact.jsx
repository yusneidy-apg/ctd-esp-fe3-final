import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {themeState} = useContextGlobal()
  
  return (
    <div className={themeState.theme ? 'App' : 'App-dark'}>
      <h3>Want to know more?</h3>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      </div>
  )
}

export default Contact