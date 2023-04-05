import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={routes.home}> <button>Home</button> </Link>
      <Link to={routes.contact}> <button>Contact</button> </Link>
      <Link to={routes.detail}> <button>Detail</button> </Link>
      <Link to={routes.favs}> <button>Favs</button> </Link>

   {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/*<button>Change theme NAVBAR</button>*/}
    </nav>
  )
}

export default Navbar