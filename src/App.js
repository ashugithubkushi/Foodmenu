// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
// import Contact from './pages/Contact';
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Abouut from "./pages/Abouut";
import Login from "./components/Layouts/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/abouut" element={<Abouut />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
