//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import MySite from './pages/MySite'
import Error from './pages/Error'
import PdfReader from './components/pdf/pdfReader';
import Pdf_display from './pages/Pdf_display.js';


import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/mySite' element={<MySite/>} />
          <Route path='/pdfReader' element={<PdfReader/>} />
          <Route path='/pdfdisplay' element={<Pdf_display/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
