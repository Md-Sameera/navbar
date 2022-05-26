import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navb from './abc/Navb';
import ContactUs from './abc/ContactUs';
import Home from './abc/Home'
import Students from './abc/Students';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navb />
    <Routes>
    <Route index element={<Home/>} />
      <Route path='/students'element={<Students/>} />
      <Route path="contactus" element={<ContactUs />} />

    </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;