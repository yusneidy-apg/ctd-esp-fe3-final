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
    <nav className='navbar'>
      {<Link to={routes.home}>Home</Link>}
      {<Link to={routes.contact}>Contact</Link>}
      {<Link to={routes.favs}>Favorites</Link>}

         {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
         {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <button onClick={switchTheme}>{themeState.theme ? '🌒' : '🌞'}</button>
    </nav>
  )
}

export default Navbar;