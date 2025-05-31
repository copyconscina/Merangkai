// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Your Layout import
import Home from './pages/Home';
// ... other page imports ...

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... other routes ... */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;