import React from "react";  
import { createContext, useReducer, useContext } from "react";
import { useState, useEffect} from 'react'

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext( );

export const ContextProvider = ({ children }) => {

  const [favs, setFavs] = useState([])
  
  const [state, dispach] = useReducer ([])

  const url = `https://jsonplaceholder.typicode.com/users`

  const [dentis, setDentis] = useState([])
  
  useEffect(() =>{
    fetch(url)
    .then ((response) => response.json())
    .then((data) => setDentis(data))
    
  },[])
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
    <ContextGlobal.Provider 
    value={{
      dentis,state,dispach,favs,setFavs
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}


