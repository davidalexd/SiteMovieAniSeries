//import { Routes, Route } from "react-router-dom";
import "./App.css"
import { Header } from "./components/Main/Header";
import { Content } from "./components/Main/Content";
import { Footer } from "./components/footer/Footer";


//import "./assets/styles.css"
//import { Home } from "./components/home/Home";
//import { Prueba } from "./components/Main/Prueba";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      {/* <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/" element={<Prueba/>} />
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
