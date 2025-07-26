import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <i className="fab fa-bitcoin text-2xl text-purple-500"></i>
              <h3 className="text-xl font-bold text-white">CryptoWealth</h3>
            </Link>
            <p className="mb-4">The most trusted crypto investment platform with guaranteed daily returns.</p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white">
                <i className="fab fa-telegram text-xl"></i>
              </button>
              <button className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </button>
              <button className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
              <li><Link to="/" className="hover:text-white">Investment Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/support" className="hover:text-white">Help & Support</Link></li>
              <li><Link to="/terms" className="hover:text-white">Risk Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-purple-500"></i>
                <span>support@cryptowealth.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2 text-purple-500"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-purple-500"></i>
                <span>123 Crypto Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-2 text-purple-500"></i>
                <span>24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 CryptoWealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
