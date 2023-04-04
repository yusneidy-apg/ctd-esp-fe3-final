
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (

  <div className="App">
      <Navbar/>
      <Footer/>
      <Home/>
      <Contact/>
      <Detail/>
      <Favs/>
  </div>
    );
}

export default App;