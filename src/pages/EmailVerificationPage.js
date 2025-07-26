import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EmailVerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verifyEmail, resendVerificationEmail } = useAuth();
  
  const [verificationStatus, setVerificationStatus] = useState('pending'); // pending, success, error
  const [message, setMessage] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [email, setEmail] = useState(location.state?.email || '');

  const handleVerification = useCallback(async (token) => {
    try {
      const result = await verifyEmail(token);
      
      if (result.success) {
        setVerificationStatus('success');
        setMessage(result.message);
        
        // Redirect to dashboard after successful verification
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      } else {
        setVerificationStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setVerificationStatus('error');
      setMessage('An error occurred during verification. Please try again.');
    }
  }, [verifyEmail, navigate, setVerificationStatus, setMessage]);

  useEffect(() => {
    // Check if there's a verification token in the URL
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');
    
    if (token) {
      handleVerification(token);
    }
  }, [location, handleVerification]);

  useEffect(() => {
    // Cooldown timer for resend button
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleResendEmail = async () => {
    if (!email) {
      setMessage('Please enter your email address first.');
      return;
    }

    setIsResending(true);
    
    try {
      const result = await resendVerificationEmail(email);
      
      if (result.success) {
        setMessage('Verification email sent successfully! Please check your inbox.');
        setResendCooldown(60); // 60 second cooldown
      } else {
        setMessage(result.message || 'Failed to resend verification email.');
      }
    } catch (error) {
      setMessage('An error occurred while resending the email.');
    } finally {
      setIsResending(false);
    }
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case 'success':
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-check-circle text-4xl text-green-400"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Email Verified Successfully!
              </h2>
              <p className="text-purple-300 text-lg">
                Your email has been verified. You will be redirected to your dashboard shortly.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <i className="fas fa-spinner fa-spin"></i>
              <span>Redirecting to dashboard...</span>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition-all duration-200"
            >
              <i className="fas fa-tachometer-alt mr-2"></i>
              Go to Dashboard
            </Link>
          </div>
        );

      case 'error':
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-exclamation-triangle text-4xl text-red-400"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Verification Failed
              </h2>
              <p className="text-purple-300 text-lg mb-4">
                {message || 'The verification link is invalid or has expired.'}
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                  Enter your email to resend verification
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <button
                onClick={handleResendEmail}
                disabled={isResending || resendCooldown > 0}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : resendCooldown > 0 ? (
                  <>
                    <i className="fas fa-clock mr-2"></i>
                    Resend in {resendCooldown}s
                  </>
                ) : (
                  <>
                    <i className="fas fa-envelope mr-2"></i>
                    Resend Verification Email
                  </>
                )}
              </button>
            </div>

            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="inline-flex items-center px-4 py-2 border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-600 rounded-lg transition-all duration-200"
              >
                <i className="fas fa-user-plus mr-2"></i>
                Create New Account
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-600 rounded-lg transition-all duration-200"
              >
                <i className="fas fa-sign-in-alt mr-2"></i>
                Sign In
              </Link>
            </div>
          </div>
        );

      default: // pending
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-envelope text-4xl text-purple-400"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Check Your Email
              </h2>
              <p className="text-purple-300 text-lg">
                We've sent a verification link to{' '}
                <span className="text-white font-medium">{email}</span>
              </p>
              <p className="text-purple-300 mt-2">
                Click the link in the email to verify your account and start earning.
              </p>
            </div>

            {/* Email Instructions */}
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                <i className="fas fa-info-circle mr-2 text-purple-400"></i>
                What to do next:
              </h3>
              <ol className="space-y-2 text-purple-300">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  Check your email inbox for a message from CryptoWealth
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  Click the "Verify Email" button in the email
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  You'll be automatically signed in to your dashboard
                </li>
              </ol>
              
              <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded">
                <p className="text-yellow-300 text-sm">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <strong>Can't find the email?</strong> Check your spam/junk folder. 
                  The email might take a few minutes to arrive.
                </p>
              </div>
            </div>

            {/* Resend Section */}
            <div className="space-y-4">
              <p className="text-purple-300">Didn't receive the email?</p>
              
              <div>
                <label htmlFor="resendEmail" className="block text-sm font-medium text-purple-300 mb-2">
                  Confirm your email address
                </label>
                <input
                  id="resendEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <button
                onClick={handleResendEmail}
                disabled={isResending || resendCooldown > 0}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending verification email...
                  </>
                ) : resendCooldown > 0 ? (
                  <>
                    <i className="fas fa-clock mr-2"></i>
                    Resend available in {resendCooldown} seconds
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Resend Verification Email
                  </>
                )}
              </button>
            </div>

            {/* Additional Actions */}
            <div className="border-t border-purple-500/30 pt-6">
              <p className="text-purple-300 mb-4">Need help?</p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-600 rounded-lg transition-all duration-200"
                >
                  <i className="fas fa-headset mr-2"></i>
                  Contact Support
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-600 rounded-lg transition-all duration-200"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 p-8 rounded-xl border border-purple-500/20 backdrop-blur">
          {/* Message Display */}
          {message && verificationStatus === 'pending' && (
            <div className="mb-6 p-4 rounded-lg border bg-blue-900/20 border-blue-500/50 text-blue-400">
              <div className="flex items-center">
                <i className="fas fa-info-circle mr-2"></i>
                {message}
              </div>
            </div>
          )}
          
          {renderContent()}
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-start">
            <i className="fas fa-shield-alt text-purple-400 mr-3 mt-1"></i>
            <div className="text-sm text-purple-300">
              <p className="font-medium mb-1">Security Notice</p>
              <p>For your security, verification links expire after 24 hours. If your link has expired, please request a new one.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
