import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={localStorage.getItem('isAuthenticated') === 'true' ? "/dashboard" : "/login"} replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute toggleTheme={toggleTheme} currentTheme={theme}><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute toggleTheme={toggleTheme} currentTheme={theme}><Profile /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute toggleTheme={toggleTheme} currentTheme={theme}><Analytics /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute toggleTheme={toggleTheme} currentTheme={theme}><Notifications /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute toggleTheme={toggleTheme} currentTheme={theme}><Settings toggleTheme={toggleTheme} currentTheme={theme} /></ProtectedRoute>} />
        
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
