// MongoDB connection utility for Node.js backend
// Note: This would typically be used in a backend server, not in React frontend

import { MongoClient } from 'mongodb';

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.REACT_APP_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the REACT_APP_MONGODB_URI environment variable');
}

let client;
let clientPromise;

if (process.env.REACT_APP_NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the value
  // across module reloads caused by HMR (Hot Module Replacement)
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise
export default clientPromise;

// Database helper functions
export const connectToDatabase = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('cryptowealth'); // Your database name
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

// Collection helpers
export const getCollection = async (collectionName) => {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
};

// Common collections
export const collections = {
  users: 'users',
  investments: 'investments',
  transactions: 'transactions',
  plans: 'plans',
  withdrawals: 'withdrawals',
  notifications: 'notifications',
  logs: 'logs'
};

// Example usage functions
export const getUserById = async (userId) => {
  try {
    const users = await getCollection(collections.users);
    return await users.findOne({ _id: userId });
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const createInvestment = async (investmentData) => {
  try {
    const investments = await getCollection(collections.investments);
    const result = await investments.insertOne({
      ...investmentData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return result;
  } catch (error) {
    console.error('Error creating investment:', error);
    throw error;
  }
};

export const getInvestmentsByUser = async (userId) => {
  try {
    const investments = await getCollection(collections.investments);
    return await investments.find({ userId }).toArray();
  } catch (error) {
    console.error('Error fetching investments:', error);
    throw error;
  }
};
