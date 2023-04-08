import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {
  
 const {favState, themeState} = useContextGlobal ()

  return (
    <div className={themeState.theme ? 'App' : 'App-dark'}>
      <h2> Dentists Favs </h2>
      <div className="card-grid">
        {favState.map(detail => (
          <Card key= {detail.id} id={detail.id} name={detail.name} username={detail.username}/>
        ))
        }
        </div>
    </div>
  );
};

export default Favs;
