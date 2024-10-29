import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Charts from './Components/Charts';
import AssetsRequest from './Components/AssetsRequest';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar"></div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/assets" element={<AssetsRequest />} />
          </Routes>
        </div>
        <div className="sidebar"></div>
      </div>
    </Router>
  );
}

export default App;
