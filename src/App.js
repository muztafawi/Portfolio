/** @format */

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Filter from './Components/Filter';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Profile />
      <Filter />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
