import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<div>Test App - Working!</div>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
