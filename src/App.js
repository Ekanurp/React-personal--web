import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import {Routes, Route, Link} from 'react-router-dom'
import Portofolio from './components/Portofolio';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portofolio" element={<Portofolio />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App;
