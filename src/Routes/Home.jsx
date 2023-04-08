import React from 'react';
import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';


const Home = () => {

  const {dentis, themeState} = useContextGlobal();

  return (
    <main className={themeState.theme ? 'App' : 'App-dark'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentis.map((item) => <Card key = {item.id} name={item.name} username={item.username} id={item.id}/>)}
      </div>
    </main>
  )
}

export default Home