import React from 'react';
import AdminPanel from './modules/adminPanel/components/AdminPanel/AdminPanel';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './context/themeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AdminPanel />
      </Router>
    </ThemeProvider>
  );
}

export default App;
