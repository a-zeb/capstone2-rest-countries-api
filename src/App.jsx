import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
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
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
