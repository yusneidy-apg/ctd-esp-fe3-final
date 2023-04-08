import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({})
  const  {id}  = useParams();
  let idNum = parseInt(id);
  const {favDispatch} = useContextGlobal()
  const url = 'https://jsonplaceholder.typicode.com/users/' + idNum

  useEffect(() =>{
    fetch(url)
    .then ((response) => response.json())
    .then((data) => setDetail(data))
  },[])

  const addFav = () => {
    favDispatch({type:'ADD_FAV', payload:detail})
  }

return (
    <>
    <h2> Detail Dentist {id} </h2>
    
    <div className="card">
        <img src="./images/doctor.jpg" alt='' width={200}/>
        <h3>{detail.name}</h3>
        <h3>{detail.email}</h3>
        <h3>{detail.phone}</h3>
        <h3>{detail.website}</h3>
        <button onClick={addFav}>⭐</button>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
export default Detail