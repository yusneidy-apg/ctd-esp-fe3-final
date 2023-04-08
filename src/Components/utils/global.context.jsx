import React from "react";  
import { createContext, useReducer, useContext } from "react";
import {useState, useEffect} from 'react'


export const ContextGlobal = createContext();

const themes = {
  dark: {
      theme: false,
      bgColor: 'black',
      color: 'white',
      acolor: 'white'
      
  },
  light: {
      theme: true,
      bgColor: 'white',
      color: 'black',
      acolor: 'black'
  }
}

export const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

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

const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV': 
          return [...state, action.payload]
      default: 
          throw new Error
  }
}


export const ContextProvider = ({ children }) => {

  const [favs, setFavs] = useState([])
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [dentis, setDentis] = useState([])

  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
}, [favState])


  
  useEffect(() =>{
    fetch(url)
    .then ((response) => response.json())
    .then((data) => {
      setDentis(data);
    })
    
  },[])
  
  return (
    <ContextGlobal.Provider 
    value={{
      dentis, themeState ,themeDispatch, favs, setFavs, favState, favDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}


