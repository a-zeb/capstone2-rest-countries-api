import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Router>
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="container">
          <Routes>
            <Route path="/" element={<div>Home Page (coming soon)</div>} />
            <Route path="/country/:id" element={<div>Detail Page (coming soon)</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
