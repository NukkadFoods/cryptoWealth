import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const SidebarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const menuItems = [
    { path: '/dashboard', icon: 'fa-home', label: 'Dashboard' },
    { path: '/tasks', icon: 'fa-tasks', label: 'Tasks' },
    { path: '/affiliate', icon: 'fa-users', label: 'Affiliate' },
    { path: '/wallet', icon: 'fa-wallet', label: 'Wallet' },
    { path: '/analytics', icon: 'fa-chart-bar', label: 'Analytics' },
    { path: '/settings', icon: 'fa-cog', label: 'Settings' }
  ];

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // Clear user data
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      
      // Show logout notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 z-50 p-4 rounded-lg text-white font-medium bg-green-600 transition-all duration-300';
      notification.innerHTML = `
        <div class="flex items-center space-x-2">
          <i class="fas fa-check-circle"></i>
          <span>Logged out successfully!</span>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      // Navigate to home after a brief delay
      setTimeout(() => {
        navigate('/');
        // Remove notification
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 1000);
    }
  };

  return (
    <div className="w-64 bg-slate-900 min-h-screen border-r border-purple-900">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-purple-900">
        <Link to="/dashboard" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-coins text-white"></i>
          </div>
          <span className="text-2xl font-bold text-purple-400">CryptoWealth</span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
              location.pathname === item.path
                ? 'bg-purple-600 text-white sidebar-active'
                : 'text-purple-300 hover:bg-purple-900/50 hover:text-white'
            }`}
          >
            <i className={`fas ${item.icon} w-5 mr-3`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User Info */}
      <div className="absolute bottom-16 w-64 p-4 border-t border-purple-900">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <div>
            <div className="text-white font-medium">{user?.name || 'User'}</div>
            <div className="text-xs text-purple-300">Premium Member</div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 w-64 p-4">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 p-3 rounded-lg text-purple-300 hover:bg-purple-900/50 hover:text-white transition-all duration-200 w-full"
        >
          <i className="fas fa-sign-out-alt w-5"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;
