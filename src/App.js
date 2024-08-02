import { Navbar } from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import DetailofSelectCountry from './components/DetailofSelectCountry';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<DetailofSelectCountry/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
