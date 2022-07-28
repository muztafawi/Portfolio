/** @format */

import { Routes, Route } from 'react-router-dom';
import Overview from './Pages/Overview';
import Main from './Pages/Main';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Sidebar from './Pages/Sidebar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Overview />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/portfolio' element={<Portfolio />} />
          <Route index element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
