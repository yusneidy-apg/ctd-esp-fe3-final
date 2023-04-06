import React from 'react';
import { ContextGlobal, ContextProvider } from '../Components/utils/global.context';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentis} = ContextGlobal()
  

  return (
    <main className="" >
      <Navbar/>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentis.map((item) => <Card key = {item.id} name={item.name} username={item.username}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
      <Footer/>
    </main>
  )
}

export default Home