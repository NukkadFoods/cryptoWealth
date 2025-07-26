// Environment configuration utilities
class EnvironmentConfig {
  // MongoDB Configuration
  static get mongoUri() {
    return process.env.REACT_APP_MONGODB_URI || '';
  }

  // API Configuration
  static get apiBaseUrl() {
    return process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';
  }

  static get apiTimeout() {
    return parseInt(process.env.REACT_APP_API_TIMEOUT || '10000');
  }

  // Authentication
  static get jwtSecret() {
    return process.env.REACT_APP_JWT_SECRET || '';
  }

  static get jwtExpiresIn() {
    return process.env.REACT_APP_JWT_EXPIRES_IN || '7d';
  }

  // App Configuration
  static get appName() {
    return process.env.REACT_APP_APP_NAME || 'CryptoWealth';
  }

  static get appVersion() {
    return process.env.REACT_APP_APP_VERSION || '1.0.0';
  }

  static get environment() {
    return process.env.REACT_APP_ENVIRONMENT || 'development';
  }

  // External Services
  static get cryptoApiKey() {
    return process.env.REACT_APP_CRYPTO_API_KEY || '';
  }

  static get emailServiceKey() {
    return process.env.REACT_APP_EMAIL_SERVICE_KEY || '';
  }

  // Security
  static get encryptionKey() {
    return process.env.REACT_APP_ENCRYPTION_KEY || '';
  }

  static get corsOrigin() {
    return process.env.REACT_APP_CORS_ORIGIN || 'http://localhost:3000';
  }

  // Payment Gateway
  static get stripePublicKey() {
    return process.env.REACT_APP_STRIPE_PUBLIC_KEY || '';
  }

  static get paypalClientId() {
    return process.env.REACT_APP_PAYPAL_CLIENT_ID || '';
  }

  // Contact Information
  static get supportEmail() {
    return process.env.REACT_APP_SUPPORT_EMAIL || 'support@cryptowealth.com';
  }

  static get companyPhone() {
    return process.env.REACT_APP_COMPANY_PHONE || '+1-555-123-4567';
  }

  static get companyAddress() {
    return process.env.REACT_APP_COMPANY_ADDRESS || '123 Crypto Street, Digital City, DC 12345';
  }

  // Feature Flags
  static get enableLiveChat() {
    return process.env.REACT_APP_ENABLE_LIVE_CHAT === 'true';
  }

  static get enableNotifications() {
    return process.env.REACT_APP_ENABLE_NOTIFICATIONS === 'true';
  }

  static get enable2FA() {
    return process.env.REACT_APP_ENABLE_2FA === 'true';
  }

  static get maintenanceMode() {
    return process.env.REACT_APP_MAINTENANCE_MODE === 'true';
  }

  // Analytics
  static get googleAnalyticsId() {
    return process.env.REACT_APP_GOOGLE_ANALYTICS_ID || '';
  }

  static get mixpanelToken() {
    return process.env.REACT_APP_MIXPANEL_TOKEN || '';
  }

  // Utility methods
  static get isDevelopment() {
    return this.environment === 'development';
  }

  static get isProduction() {
    return this.environment === 'production';
  }

  static get isTest() {
    return this.environment === 'test';
  }

  // Validation method
  static validateRequiredEnvVars() {
    const required = [
      'REACT_APP_MONGODB_URI',
      'REACT_APP_JWT_SECRET',
      'REACT_APP_ENCRYPTION_KEY'
    ];

    const missing = required.filter(envVar => !process.env[envVar]);
    
    if (missing.length > 0) {
      console.error('Missing required environment variables:', missing);
      return false;
    }
    
    return true;
  }

  // Get all configuration for debugging (excluding sensitive data)
  static getPublicConfig() {
    return {
      appName: this.appName,
      appVersion: this.appVersion,
      environment: this.environment,
      apiBaseUrl: this.apiBaseUrl,
      supportEmail: this.supportEmail,
      companyPhone: this.companyPhone,
      enableLiveChat: this.enableLiveChat,
      enableNotifications: this.enableNotifications,
      enable2FA: this.enable2FA,
      maintenanceMode: this.maintenanceMode
    };
  }
}

export default EnvironmentConfig;
