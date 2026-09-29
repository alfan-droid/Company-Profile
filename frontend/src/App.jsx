import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
