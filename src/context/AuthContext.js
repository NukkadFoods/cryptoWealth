import React, { createContext, useContext, useState, useEffect } from 'react';

// Get API base URL from environment or use default
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false); // Separate loading for auth operations
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // User tracking data
  const [userSession, setUserSession] = useState({
    ipAddress: null,
    browserInfo: null,
    timestamp: null,
    location: null
  });

  // Get user's device and location info
  const getUserInfo = async () => {
    try {
      // Get browser info only (no external API calls)
      const browserInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      return {
        ipAddress: 'Not collected',
        browserInfo,
        timestamp: new Date().toISOString(),
        location: {
          country: 'Not collected',
          region: 'Not collected',
          city: 'Not collected',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          isp: 'Not collected'
        }
      };
    } catch (error) {
      console.error('Error getting user info:', error);
      return {
        ipAddress: 'Unknown',
        browserInfo: {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language
        },
        timestamp: new Date().toISOString(),
        location: { country: 'Unknown' }
      };
    }
  };

  // Signup function
  const signup = async (userData, captchaToken) => {
    try {
      setAuthLoading(true);
      
      // Get user tracking info
      const trackingInfo = await getUserInfo();
      
      const signupData = {
        ...userData,
        captchaToken,
        trackingInfo,
        emailVerified: false,
        status: 'pending_verification'
      };

      // Send to backend API
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData)
      });

      const result = await response.json();
      
      if (response.ok) {
        setUserSession(trackingInfo);
        return { success: true, message: 'Verification email sent! Please check your inbox.' };
      } else {
        throw new Error(result.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  // Email verification function
  const verifyEmail = async (verificationToken) => {
    try {
      setAuthLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: verificationToken })
      });

      const result = await response.json();
      
      if (response.ok) {
        setIsEmailVerified(true);
        setCurrentUser(result.user);
        return { success: true, message: 'Email verified successfully!' };
      } else {
        throw new Error(result.message || 'Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      return { success: false, message: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  // Login function
  const login = async (email, password, captchaToken, source = 'unknown') => {
    try {
      console.log('🚀 Login attempt started from:', source, { email, API_BASE_URL });
      console.log('🔍 Parameters received:', { email, password: '[HIDDEN]', captchaToken, source });
      console.log('🔍 CALL STACK:', new Error().stack);
      setAuthLoading(true); // Use separate loading state
      
      const trackingInfo = await getUserInfo();
      console.log('📊 Tracking info:', trackingInfo);
      
      const loginUrl = `${API_BASE_URL}/auth/login`;
      console.log('🌐 Making request to:', loginUrl);
      
      const requestBody = { 
        email, 
        password, 
        captchaToken,
        trackingInfo 
      };
      console.log('📝 Request body:', { ...requestBody, password: '[HIDDEN]' });
      
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

      const result = await response.json();
      console.log('📦 Response data:', { ...result, token: result.token ? '[TOKEN]' : 'NO_TOKEN' });
      
      if (response.ok) {
        console.log('✅ Login successful, setting user:', result.user);
        setCurrentUser(result.user);
        setIsEmailVerified(result.user.emailVerified);
        setUserSession(trackingInfo);
        localStorage.setItem('token', result.token);
        console.log('✅ Token saved to localStorage:', result.token ? 'YES' : 'NO');
        console.log('✅ Current user set:', !!result.user);
        return { success: true, user: result.user };
      } else {
        // Check if this is an email verification error
        if (response.status === 403 && result.error === 'Email not verified') {
          return { 
            success: false, 
            message: 'Email not verified. Please verify your email before logging in.',
            needsVerification: true, 
            email: result.email 
          };
        } else {
          throw new Error(result.message || result.error || 'Login failed');
        }
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      return { success: false, message: error.message };
    } finally {
      setAuthLoading(false); // Use separate loading state
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    setIsEmailVerified(false);
    setUserSession({});
    localStorage.removeItem('token');
  };

  // Resend verification email
  const resendVerificationEmail = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Resend verification error:', error);
      return { success: false, message: error.message };
    }
  };

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    console.log('🔐 AuthContext mount - Token found:', !!token);
    if (token) {
      console.log('🔐 Verifying token with backend...');
      // Verify token with backend
      fetch(`${API_BASE_URL}/auth/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
      .then(response => {
        console.log('🔐 Token verification response status:', response.status);
        return response.json();
      })
      .then(result => {
        console.log('🔐 Token verification result:', result);
        if (result.success) {
          console.log('🔐 Token valid, setting user:', result.user);
          setCurrentUser(result.user);
          setIsEmailVerified(result.user.emailVerified);
        } else {
          console.log('🔐 Token invalid, removing from localStorage');
          localStorage.removeItem('token');
        }
      })
      .catch(error => {
        console.error('🔐 Token verification failed:', error);
        localStorage.removeItem('token');
      })
      .finally(() => {
        console.log('🔐 Token verification complete, setting loading to false');
        setLoading(false);
      });
    } else {
      console.log('🔐 No token found, setting loading to false');
      setLoading(false);
    }
  }, []);

  const value = {
    currentUser,
    isEmailVerified,
    userSession,
    signup,
    login,
    logout,
    verifyEmail,
    resendVerificationEmail,
    loading,
    authLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
