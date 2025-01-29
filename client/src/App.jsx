import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addPet" element={<AddPet />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
