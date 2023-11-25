import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="Blogs" element={<Blogs />}/>
      <Route path="Contact" element={<Contact />}/>
      <Route path="*" element={<Nopage />}/>
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />);
 
