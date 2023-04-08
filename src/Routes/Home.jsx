import React from 'react';
import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentis} = useContextGlobal();

  return (
    <main className="" >
      <h2>Home</h2>
      <div className='card-grid'>
        {dentis.map((item) => <Card key = {item.id} name={item.name} username={item.username} id={item.id}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home