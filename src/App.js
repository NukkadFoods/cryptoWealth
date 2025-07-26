import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignupPage from './pages/SignupPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import ResendVerification from './pages/ResendVerification';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import AffiliatePage from './pages/AffiliatePage';
import WalletPageDashboard from './pages/WalletPageDashboard';
import AnalyticsPage from './pages/AnalyticsPage';
import AnalyticsInvestments from './pages/AnalyticsInvestments';
import AnalyticsUsers from './pages/AnalyticsUsers';
import AnalyticsPerformance from './pages/AnalyticsPerformance';
import AnalyticsEarnings from './pages/AnalyticsEarnings';
import AnalyticsReferrals from './pages/AnalyticsReferrals';
import SettingsPage from './pages/SettingsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Component to conditionally render Header and Footer
const ConditionalWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
                          location.pathname === '/tasks' || 
                          location.pathname === '/affiliate' || 
                          location.pathname === '/wallet' || 
                          location.pathname.startsWith('/analytics') || 
                          location.pathname === '/settings';

  return (
    <>
      {!isDashboardRoute && <Header />}
      {children}
      {!isDashboardRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
        <div className="App">
          <ConditionalWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/verify-email" element={<EmailVerificationPage />} />
              <Route path="/resend-verification" element={<ResendVerification />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/tasks" element={<ProtectedRoute><TasksPage /></ProtectedRoute>} />
              <Route path="/affiliate" element={<ProtectedRoute><AffiliatePage /></ProtectedRoute>} />
              <Route path="/wallet" element={<ProtectedRoute><WalletPageDashboard /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
              <Route path="/analytics/investments" element={<ProtectedRoute><AnalyticsInvestments /></ProtectedRoute>} />
              <Route path="/analytics/users" element={<ProtectedRoute><AnalyticsUsers /></ProtectedRoute>} />
              <Route path="/analytics/performance" element={<ProtectedRoute><AnalyticsPerformance /></ProtectedRoute>} />
              <Route path="/analytics/earnings" element={<ProtectedRoute><AnalyticsEarnings /></ProtectedRoute>} />
              <Route path="/analytics/referrals" element={<ProtectedRoute><AnalyticsReferrals /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            </Routes>
          </ConditionalWrapper>
        </div>
      </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
