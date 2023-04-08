import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
 const {favState} = useContextGlobal ()

  return (
    <>
      <h2> Dentists Favs</h2>
      <div className="card-grid">
        {favState.map(detail => (
          <Card id={detail.id} name={detail.name} username={detail.username}/>
        ))
        }
  
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
