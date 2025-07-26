import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import DashboardLayout from '../components/DashboardLayout';

const WalletPage = () => {
  const { user, staticUserData } = useContext(UserContext);
  
  // Use staticUserData for display if user is logged in
  const displayUserData = user ? staticUserData : null;
  const [activeTab, setActiveTab] = useState('overview');
  
  const [transactions] = useState([
    { id: 1, type: 'deposit', amount: 500, status: 'completed', date: '2024-01-20', method: 'Bitcoin' },
    { id: 2, type: 'withdrawal', amount: -200, status: 'pending', date: '2024-01-19', method: 'Ethereum' },
    { id: 3, type: 'earnings', amount: 25.50, status: 'completed', date: '2024-01-18', method: 'ROI' },
    { id: 4, type: 'referral', amount: 50, status: 'completed', date: '2024-01-17', method: 'Commission' }
  ]);

  const [walletAddresses] = useState({
    bitcoin: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    ethereum: '0x742d35Cc643C0532e05Cef3f8A1234567890abcD',
    litecoin: 'LTC1234567890abcdefghijklmnopqrstuvwxyz'
  });

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'deposit': return 'fa-arrow-down text-green-400';
      case 'withdrawal': return 'fa-arrow-up text-red-400';
      case 'earnings': return 'fa-coins text-yellow-400';
      case 'referral': return 'fa-users text-purple-400';
      default: return 'fa-exchange-alt text-blue-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-600/20';
      case 'pending': return 'text-yellow-400 bg-yellow-600/20';
      case 'failed': return 'text-red-400 bg-red-600/20';
      default: return 'text-slate-400 bg-slate-600/20';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Wallet</h1>
          <div className="flex space-x-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              <i className="fas fa-plus mr-2"></i>Deposit
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              <i className="fas fa-minus mr-2"></i>Withdraw
            </button>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">Total Balance</h3>
            <p className="text-3xl font-bold text-purple-400">$1,245.67</p>
            <p className="text-slate-300 mt-2">Available for investment</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">Active Investments</h3>
            <p className="text-3xl font-bold text-green-400">$890.00</p>
            <p className="text-slate-300 mt-2">Currently invested</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold text-yellow-400">$355.67</p>
            <p className="text-slate-300 mt-2">Lifetime earnings</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800 rounded-lg">
          <div className="border-b border-slate-700">
            <nav className="flex space-x-8 px-6">
              {['overview', 'transactions', 'addresses'].map(tab => (
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
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Portfolio Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Bitcoin (BTC)</span>
                        <span className="text-white font-bold">45% - $560.55</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Ethereum (ETH)</span>
                        <span className="text-white font-bold">30% - $373.70</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Other Assets</span>
                        <span className="text-white font-bold">25% - $311.42</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                    <div className="space-y-3">
                      {transactions.slice(0, 4).map(transaction => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <i className={`fas ${getTransactionIcon(transaction.type)}`}></i>
                            <div>
                              <div className="text-white font-medium capitalize">{transaction.type}</div>
                              <div className="text-slate-400 text-sm">{transaction.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                              {transaction.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Transaction History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left text-purple-300 py-3">Type</th>
                        <th className="text-left text-purple-300 py-3">Amount</th>
                        <th className="text-left text-purple-300 py-3">Method</th>
                        <th className="text-left text-purple-300 py-3">Status</th>
                        <th className="text-left text-purple-300 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map(transaction => (
                        <tr key={transaction.id} className="border-b border-slate-700">
                          <td className="py-3">
                            <div className="flex items-center space-x-2">
                              <i className={`fas ${getTransactionIcon(transaction.type)}`}></i>
                              <span className="text-white capitalize">{transaction.type}</span>
                            </div>
                          </td>
                          <td className={`py-3 font-bold ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                          </td>
                          <td className="text-slate-300 py-3">{transaction.method}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(transaction.status)}`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="text-slate-300 py-3">{transaction.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Wallet Addresses</h3>
                <div className="space-y-4">
                  {Object.entries(walletAddresses).map(([currency, address]) => (
                    <div key={currency} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white font-medium capitalize">{currency}</h4>
                        <button
                          onClick={() => navigator.clipboard.writeText(address)}
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                      <p className="text-slate-300 font-mono text-sm break-all">{address}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <i className="fas fa-exclamation-triangle text-yellow-400"></i>
                    <h4 className="text-yellow-400 font-medium">Important Notice</h4>
                  </div>
                  <p className="text-yellow-300 text-sm">
                    Only send the corresponding cryptocurrency to each address. Sending the wrong currency may result in permanent loss of funds.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WalletPage;
