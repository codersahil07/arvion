import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const ProtectedRoute = ({ toggleTheme, currentTheme, children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-layout">
      <Sidebar mobileMenuOpen={mobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      
      <div className="main-content">
        <Header 
          toggleTheme={toggleTheme} 
          currentTheme={currentTheme}
          toggleMobileMenu={toggleMobileMenu}
        />
        <main className="page-container">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ProtectedRoute;
