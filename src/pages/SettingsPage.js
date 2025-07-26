import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import DashboardLayout from '../components/DashboardLayout';

const SettingsPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    timezone: 'UTC-5'
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    emailNotifications: true,
    smsNotifications: false,
    loginAlerts: true
  });

  const [preferences, setPreferences] = useState({
    currency: 'USD',
    language: 'English',
    theme: 'dark',
    autoReinvest: false,
    emailReports: true
  });

  const handleProfileSave = () => {
    setUser(prev => ({ ...prev, name: profileData.name, email: profileData.email }));
    setIsEditing(false);
    // Show success notification
    showNotification('Profile updated successfully!', 'success');
  };

  const showNotification = (message, type = 'info') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white font-medium transition-all duration-300 ${
      type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    }`;
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  };

  const handlePasswordChange = () => {
    showNotification('Password change functionality will be implemented soon.', 'info');
  };

  const handleTwoFactorSetup = () => {
    if (!securitySettings.twoFactorAuth) {
      showNotification('Two-factor authentication enabled successfully!', 'success');
    } else {
      showNotification('Two-factor authentication disabled.', 'info');
    }
    toggleSecuritySetting('twoFactorAuth');
  };

  const toggleSecuritySetting = (setting) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const togglePreference = (setting) => {
    setPreferences(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <i className={`fas ${isEditing ? 'fa-times' : 'fa-edit'} mr-2`}></i>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800 rounded-lg">
          <div className="border-b border-slate-700">
            <nav className="flex space-x-8 px-6">
              {['profile', 'security', 'preferences', 'notifications'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-slate-400 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                      autocomplete="name"
                      className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                      autocomplete="email"
                      className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                      autocomplete="tel"
                      className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Country</label>
                    <select
                      value={profileData.country}
                      onChange={(e) => setProfileData(prev => ({ ...prev, country: e.target.value }))}
                      disabled={!isEditing}
                      autocomplete="country"
                      className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleProfileSave}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Security Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                      <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                    </div>
                    <button
                      onClick={handleTwoFactorSetup}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.twoFactorAuth ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Login Alerts</h3>
                      <p className="text-slate-400 text-sm">Get notified of new login attempts</p>
                    </div>
                    <button
                      onClick={() => toggleSecuritySetting('loginAlerts')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.loginAlerts ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.loginAlerts ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-lg p-4">
                  <h3 className="text-yellow-400 font-medium mb-2">Change Password</h3>
                  <p className="text-yellow-300 text-sm mb-3">
                    Regular password changes help keep your account secure.
                  </p>
                  <button 
                    onClick={handlePasswordChange}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Preferences</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Default Currency</label>
                    <select
                      value={preferences.currency}
                      onChange={(e) => setPreferences(prev => ({ ...prev, currency: e.target.value }))}
                      className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="BTC">BTC - Bitcoin</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Language</label>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Auto-Reinvest Earnings</h3>
                      <p className="text-slate-400 text-sm">Automatically reinvest your ROI earnings</p>
                    </div>
                    <button
                      onClick={() => togglePreference('autoReinvest')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.autoReinvest ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.autoReinvest ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Email Reports</h3>
                      <p className="text-slate-400 text-sm">Receive weekly performance reports via email</p>
                    </div>
                    <button
                      onClick={() => togglePreference('emailReports')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.emailReports ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.emailReports ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Notification Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">Email Notifications</h3>
                      <p className="text-slate-400 text-sm">Receive important updates via email</p>
                    </div>
                    <button
                      onClick={() => toggleSecuritySetting('emailNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.emailNotifications ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">SMS Notifications</h3>
                      <p className="text-slate-400 text-sm">Receive urgent alerts via SMS</p>
                    </div>
                    <button
                      onClick={() => toggleSecuritySetting('smsNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.smsNotifications ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3">Notification Types</h3>
                  <div className="space-y-2">
                    {[
                      'Investment confirmations',
                      'Withdrawal requests',
                      'ROI payments',
                      'Referral bonuses',
                      'System maintenance',
                      'Security alerts'
                    ].map(type => (
                      <label key={type} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 text-purple-600 bg-slate-600 border-slate-500 rounded focus:ring-purple-500"
                        />
                        <span className="text-slate-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
