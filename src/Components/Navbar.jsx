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
      <div className='odonto'>
      <h2 className="letra-d">D</h2>
      <h2 className="letra-h">H</h2>
      <h2>Odonto</h2>
      </div>
      <div className="links-nav">
      {<Link to={routes.home}style= {{color: themeState.acolor}}>  Home</Link>}
      {<Link to={routes.contact} style= {{color: themeState.acolor}}>Contact</Link>}
      {<Link to={routes.favs} style= {{color: themeState.acolor}}>Favorites</Link>}
      <button onClick={switchTheme}>{themeState.theme ? "🌙" : "☀️"}</button></div>
    </nav>
  )
}

export default Navbar;