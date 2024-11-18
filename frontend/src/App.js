import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import MusicComposer from './Pages/MusicComposer/MusicComposer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/composer" element={<MusicComposer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
