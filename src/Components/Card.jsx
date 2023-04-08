import { Link } from "react-router-dom";
import { routes } from "../routes"
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {favDispatch} = useContextGlobal()


  const addFav = ()=>{ 
    favDispatch({type: 'ADD_FAV', payload: { id, name, username}})
  }

  return (
    <div className="card">
      <img src = "./images/doctor.jpg" alt = "dentista" width={200}/>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{username}</h3>
      <Link to={routes.detail + id}> Detail </Link>
        <button onClick= { addFav } className="favButton">Add fav ⭐</button>
    </div>
  );
}; 

export default Card;
