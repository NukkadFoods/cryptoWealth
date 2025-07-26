import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin, authLoading } = useAuth();
  const { login: userLogin } = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
    // Clear error when user starts typing
    if (error) setError('');
    if (needsVerification) setNeedsVerification(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setNeedsVerification(false);
    
    try {
      const result = await authLogin(formData.email, formData.password, undefined, 'LoginComponent');
      
      if (result.success) {
        try {
          userLogin(result.user);
          console.log('✅ UserContext updated successfully');
        } catch (userContextError) {
          console.error('UserContext update failed:', userContextError);
        }
        
        console.log('✅ Login successful, redirecting to dashboard...');
        // Use replace instead of navigate to avoid going back to login
        navigate('/dashboard', { replace: true });
      } else if (result.needsVerification) {
        setNeedsVerification(true);
        setError('Your email is not verified. Please verify your email before logging in.');
      } else {
        setError(result.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  const handleResendVerification = () => {
    navigate('/resend-verification', { state: { email: formData.email } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <i className="fab fa-bitcoin text-4xl text-purple-600 mr-2"></i>
            <h1 className="text-3xl font-bold text-gray-800">CryptoWealth</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Login to your investment dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
              {needsVerification && (
                <div className="mt-2">
                  <button 
                    onClick={handleResendVerification}
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    Resend verification email
                  </button>
                </div>
              )}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address / Username
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email or username"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  autoComplete="off"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full gradient-bg text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center"
            >
              {authLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <i className="fab fa-google text-red-500 mr-2"></i>
              Google
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <i className="fab fa-facebook text-blue-600 mr-2"></i>
              Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <i className="fas fa-shield-alt text-blue-600 mt-1 mr-3"></i>
            <div>
              <h3 className="text-sm font-medium text-blue-800">Secure Login</h3>
              <p className="text-sm text-blue-700 mt-1">
                Your login is protected by enterprise-grade security. We use 256-bit SSL encryption 
                and two-factor authentication to keep your account safe.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <i className="fas fa-chart-line text-green-500 text-2xl mb-2"></i>
              <p className="text-xs text-gray-600">2% Daily Returns</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <i className="fas fa-shield text-purple-500 text-2xl mb-2"></i>
              <p className="text-xs text-gray-600">Secure Platform</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <i className="fas fa-headset text-blue-500 text-2xl mb-2"></i>
              <p className="text-xs text-gray-600">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
