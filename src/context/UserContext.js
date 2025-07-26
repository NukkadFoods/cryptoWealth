import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export { UserContext };

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Check for stored user on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (storedUser && isAuthenticated === 'true') {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [staticUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    totalInvestment: 7500,
    totalEarnings: 1350,
    dailyEarnings: 150,
    availableBalance: 850
  });

  const [investments] = useState([
    {
      id: 1,
      plan: 'Starter Plan',
      amount: 500,
      startDate: '2024-01-15',
      endDate: '2024-07-15',
      dailyReturn: 10,
      totalReturn: 150,
      status: 'Active'
    },
    {
      id: 2,
      plan: 'Professional Plan',
      amount: 2000,
      startDate: '2024-02-01',
      endDate: '2024-08-01',
      dailyReturn: 40,
      totalReturn: 400,
      status: 'Active'
    },
    {
      id: 3,
      plan: 'Premium Plan',
      amount: 5000,
      startDate: '2024-01-01',
      endDate: '2024-07-01',
      dailyReturn: 100,
      totalReturn: 800,
      status: 'Completed'
    }
  ]);

  const [stats] = useState({
    totalInvested: 2400000,
    activeInvestors: 12548,
    totalPaid: 48000,
    successRate: 98,
    yearsOfService: 5
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authToken');
  };

  const value = {
    user,
    setUser,
    staticUserData,
    investments,
    stats,
    isAuthenticated,
    login,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
