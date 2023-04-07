import React from "react";  
import { createContext, useReducer, useContext } from "react";
import {useState, useEffect} from 'react'


export const ContextGlobal = createContext();

const themes = {
  dark: {
      theme: false,
      bgColor: 'black',
      color: 'white',
      a: 'black'
      
  },
  light: {
      theme: true,
      bgColor: 'white',
      color: 'black',
      a: 'white'
  }
}

export const initialThemeState = themes.light

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error
  }
}



export const ContextProvider = ({ children }) => {

  const [favs, setFavs] = useState([])
  
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)

  const [dentis, setDentis] = useState([])

  const url = `https://jsonplaceholder.typicode.com/users`


  
  useEffect(() =>{
    fetch(url)
    .then ((response) => response.json())
    .then((data) => {
      setDentis(data);
    })
    
  },[])
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
    <ContextGlobal.Provider 
    value={{
      dentis, themeState ,themeDispatch, favs, setFavs
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}


