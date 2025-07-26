import EnvironmentConfig from '../config/environment';

class MongoDBService {
  constructor() {
    this.connectionString = EnvironmentConfig.mongoUri;
    this.isConnected = false;
    this.connection = null;
  }

  // Validate connection string
  validateConnectionString() {
    if (!this.connectionString) {
      throw new Error('MongoDB connection string is not provided in environment variables');
    }

    if (!this.connectionString.startsWith('mongodb://') && !this.connectionString.startsWith('mongodb+srv://')) {
      throw new Error('Invalid MongoDB connection string format');
    }

    return true;
  }

  // Parse connection string to extract database name
  getDatabaseName() {
    try {
      const url = new URL(this.connectionString);
      const pathname = url.pathname.substring(1); // Remove leading '/'
      const dbName = pathname.split('?')[0]; // Remove query parameters
      return dbName || 'cryptowealth';
    } catch (error) {
      console.error('Error parsing database name from connection string:', error);
      return 'cryptowealth';
    }
  }

  // Get connection configuration
  getConnectionConfig() {
    return {
      uri: this.connectionString,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4, // Use IPv4, skip trying IPv6
        bufferMaxEntries: 0,
        bufferCommands: false,
      }
    };
  }

  // Simulate connection (for frontend use)
  async testConnection() {
    try {
      this.validateConnectionString();
      
      // In a real application, you would use this in your backend
      console.log('MongoDB Configuration:', {
        uri: this.connectionString.replace(/\/\/.*@/, '//***:***@'), // Hide credentials
        database: this.getDatabaseName(),
        environment: EnvironmentConfig.environment
      });

      return {
        success: true,
        database: this.getDatabaseName(),
        message: 'Connection string is valid'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get collection names for the application
  getCollectionNames() {
    return {
      users: 'users',
      investments: 'investments',
      transactions: 'transactions',
      plans: 'investment_plans',
      analytics: 'analytics',
      notifications: 'notifications',
      support_tickets: 'support_tickets',
      audit_logs: 'audit_logs'
    };
  }

  // Database schema suggestions
  getUserSchema() {
    return {
      _id: "ObjectId",
      email: "String (unique, required)",
      password: "String (hashed, required)",
      firstName: "String (required)",
      lastName: "String (required)",
      phone: "String",
      isVerified: "Boolean (default: false)",
      kycStatus: "String (enum: ['pending', 'approved', 'rejected'])",
      twoFactorEnabled: "Boolean (default: false)",
      twoFactorSecret: "String",
      totalInvestment: "Number (default: 0)",
      totalEarnings: "Number (default: 0)",
      availableBalance: "Number (default: 0)",
      referralCode: "String (unique)",
      referredBy: "ObjectId (ref: users)",
      createdAt: "Date (default: Date.now)",
      updatedAt: "Date (default: Date.now)",
      lastLogin: "Date",
      isActive: "Boolean (default: true)"
    };
  }

  getInvestmentSchema() {
    return {
      _id: "ObjectId",
      userId: "ObjectId (ref: users, required)",
      planId: "ObjectId (ref: investment_plans, required)",
      amount: "Number (required, min: 0)",
      dailyReturn: "Number (required)",
      totalReturn: "Number (default: 0)",
      startDate: "Date (default: Date.now)",
      endDate: "Date (required)",
      status: "String (enum: ['Active', 'Completed', 'Cancelled'])",
      transactionHash: "String",
      createdAt: "Date (default: Date.now)",
      updatedAt: "Date (default: Date.now)"
    };
  }

  getTransactionSchema() {
    return {
      _id: "ObjectId",
      userId: "ObjectId (ref: users, required)",
      investmentId: "ObjectId (ref: investments)",
      type: "String (enum: ['deposit', 'withdrawal', 'earning', 'referral'])",
      amount: "Number (required)",
      currency: "String (default: 'USD')",
      status: "String (enum: ['pending', 'completed', 'failed'])",
      paymentMethod: "String",
      transactionHash: "String",
      fees: "Number (default: 0)",
      description: "String",
      createdAt: "Date (default: Date.now)",
      processedAt: "Date"
    };
  }
}

// Export singleton instance
const mongoService = new MongoDBService();
export default mongoService;
