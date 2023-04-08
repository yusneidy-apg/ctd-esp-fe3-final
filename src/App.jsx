
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import {routes} from "./routes"
import { useContextGlobal } from "./Components/utils/global.context";

function App() {

  const {themeState} = useContextGlobal();

 

  return (

  <div className={themeState.theme ? 'App' : 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color,  acolor:themeState.color }}>
    <Navbar/>
    <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.contact} element={<Contact/>}/>
      <Route path={routes.detail + ':id'} element={<Detail/>}/>
      <Route path={routes.favs}element={<Favs/>}/>
    </Routes>
    <Footer/>
  </div>
    );
}

export default App;