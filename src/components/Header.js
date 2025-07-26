import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      logout();
      navigate('/');
    }
  };

  return (
    <>
      <header className="gradient-bg text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <i className="fab fa-bitcoin text-3xl"></i>
              <h1 className="text-2xl font-bold">CryptoWealth</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`hover:text-purple-200 font-medium ${isActive('/') ? 'text-purple-200' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-purple-200 font-medium ${isActive('/about') ? 'text-purple-200' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-purple-200 font-medium ${isActive('/contact') ? 'text-purple-200' : ''}`}
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/dashboard"
                    className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition"
                  >
                    Dashboard
                  </Link>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-purple-700 font-bold text-sm">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                    <span className="text-purple-100 font-medium">{user.name}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="text-purple-200 hover:text-white transition font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition"
                >
                  Login
                </Link>
              )}
              <button 
                className="md:hidden text-2xl" 
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 flex flex-col space-y-3">
          <Link 
            to="/" 
            className={`block py-2 hover:text-purple-700 ${isActive('/') ? 'text-purple-700 font-medium' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block py-2 hover:text-purple-700 ${isActive('/about') ? 'text-purple-700 font-medium' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`block py-2 hover:text-purple-700 ${isActive('/contact') ? 'text-purple-700 font-medium' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className={`block py-2 hover:text-purple-700 ${isActive('/dashboard') ? 'text-purple-700 font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="flex items-center space-x-2 py-2">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {user.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">{user.name}</span>
              </div>
              <button 
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="block py-2 text-left text-red-600 hover:text-red-800 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className={`block py-2 hover:text-purple-700 ${isActive('/login') ? 'text-purple-700 font-medium' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
