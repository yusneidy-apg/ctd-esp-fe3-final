import React, { useContext } from "react";
import { userEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes"
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const {favs, setFavs} = ContextGlobal()

 userEffect (()=>{
   localStorage.setItem('favs', JSON.stringify(favs))
  },[])

  const addFav = ({id, name, username})=>{
   //   setFavs([...favs, {id, name, username}])    
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src = "./images/doctor.jpg" alt = "dentista"/>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{username}</h3>
      <Link to={routes.detail}> Detail </Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={()=> addFav ({id, name, username})} className="favButton">Add fav</button>
    </div>
  );
}; 

export default Card;
