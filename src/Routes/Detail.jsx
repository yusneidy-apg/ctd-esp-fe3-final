import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState, useEffect } from 'react'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({id}) => {

  const [detail, setDetail] = useState([])

  const url = `https://jsonplaceholder.typicode.com/users/:${id}`

  useEffect(() =>{
    fetch(url)
    .then ((response) => response.json())
    .then((data) => {
      console.log(data);
      setDetail(data)
    }
    )
    
  },[])
return (
    <>
    <h1> Detail Dentist id </h1>
    <div className="card">
        <img src="./images/doctor.jpg" alt='' width={200}/>
        <h3>{Detail.name}</h3>
        <h3>{Detail.email}</h3>
        <h3>{detail.phone}</h3>
        <h3>{detail.website}</h3>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
export default Detail