import React, { useState } from "react";


const Form = () => {
 //Aqui deberan implementar el form completo con sus validaciones
  const[ user, setUser] = useState ({
    nombre: '',
    email: ''
  })

  const [ mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)

    if(emailTest && user.nombre){
      setMensaje(`Gracias ${user.nombre} , te contactaremos cuando antes vía mail`)
    }else{
      setMensaje(`Por favor verifique su información nuevamente`)
    }
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <label>Nombre</label>
      <input type="text" onChange={(e) => setUser({...user, nombre: e.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button>Enviar</button>
      </form>
      <h1>{mensaje}</h1>
    </div>
  );
};

export default Form;
