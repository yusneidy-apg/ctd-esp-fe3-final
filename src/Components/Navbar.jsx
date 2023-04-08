import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    } else {
      themeDispatch({type:'SWITCH_LIGHT'})
    }
    
  }

  return (
    <nav>
      <h1>DH Odonto</h1>
      {<Link to={routes.home}style= {{color: themeState.acolor}}>  Home</Link>}
      {<Link to={routes.contact} style= {{color: themeState.acolor}}>Contact</Link>}
      {<Link to={routes.favs} style= {{color: themeState.acolor}}>Favorites</Link>}

         {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
         {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <button onClick={switchTheme}>{themeState.theme ? '🌒' : '🌞'}</button>
    </nav>
  )
}

export default Navbar;