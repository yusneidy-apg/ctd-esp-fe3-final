import React from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

const Detail = () => {

  const [detail, setDetail] = useState({})

  const  {id}  = useParams();

  let idNum = parseInt(id);
  
  const {favDispatch, themeState} = useContextGlobal()

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
    <div className={themeState.theme ? 'App' : 'App-dark'}>
    <h2> Detail Dentist {id} </h2>
       <div className="card">
        <img src="./images/doctor.jpg" alt='' width={200}/>
        <h3>{detail.name}</h3>
        <h3>{detail.email}</h3>
        <h3>{detail.phone}</h3>
        <h3>{detail.website}</h3>
        <button onClick={addFav}>⭐</button>
      </div>
    </div>
  )
}
  
export default Detail