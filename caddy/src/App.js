import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HolesPage from './components/HolesPage';
import InfoPage from './components/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HoleDetailPage from './components/HoleDetailPage';
import { ScoreProvider } from './context/ScoreContext';

function App() {
  return (
    <Router>
      <ScoreProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/holes" element={<HolesPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/hole/:holeNumber" element={<HoleDetailPage />} />
        </Routes>
      </ScoreProvider>
    </Router>
  );
}

export default App;