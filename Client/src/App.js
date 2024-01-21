import Navbar from "./Components/Navbar";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Video from "./Components/Video";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Sign";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import PreBook from "./Pages/PreBook";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes >
        <Route path="/" element={<><Video /><Home/></>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/book" element={<PreBook/>} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
