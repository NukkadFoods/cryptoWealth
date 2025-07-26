import React, { useState } from 'react';

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('deposit');

  const transactions = [
    { date: '2023-06-15', type: 'Deposit', amount: '$59.00', status: 'Completed' },
    { date: '2023-06-10', type: 'Earnings', amount: '$1.18', status: 'Completed' },
    { date: '2023-06-09', type: 'Earnings', amount: '$1.18', status: 'Completed' },
    { date: '2023-06-08', type: 'Earnings', amount: '$1.18', status: 'Completed' },
    { date: '2023-06-01', type: 'Deposit', amount: '$32.00', status: 'Completed' }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Address copied to clipboard!');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Your Crypto Wallet</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Deposit, withdraw and manage your crypto investments all in one place.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex border-b">
            {['deposit', 'withdraw', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 font-medium capitalize ${
                  activeTab === tab
                    ? 'text-purple-800 border-b-2 border-purple-800'
                    : 'text-gray-500 hover:text-purple-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Deposit Tab */}
          {activeTab === 'deposit' && (
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Deposit Crypto</h3>
              <p className="text-gray-600 mb-4">Send crypto to your wallet address below to start investing.</p>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Select Currency:</span>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>USDT (TRC20)</option>
                      <option>USDT (ERC20)</option>
                      <option>Litecoin (LTC)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Deposit Amount ($)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Enter amount in USD" />
                </div>
                
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Wallet Address:</span>
                    <button 
                      onClick={() => copyToClipboard('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <i className="far fa-copy"></i> Copy
                    </button>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-md font-mono text-sm overflow-x-auto">
                    1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="w-32 h-32 bg-white p-2">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" 
                        alt="QR Code" 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="gradient-bg text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition">
                Confirm Deposit
              </button>
            </div>
          )}
          
          {/* Withdraw Tab */}
          {activeTab === 'withdraw' && (
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Withdraw Funds</h3>
              <p className="text-gray-600 mb-4">Transfer your earnings to your external wallet.</p>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Select Currency:</span>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>USDT (TRC20)</option>
                      <option>USDT (ERC20)</option>
                      <option>Litecoin (LTC)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Withdrawal Amount ($)</label>
                  <input type="number" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Enter amount in USD" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Wallet Address</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Enter your external wallet address" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Available Balance:</label>
                  <div className="bg-white p-3 rounded-md border border-gray-300">
                    <div className="flex justify-between">
                      <span>$1,250.75</span>
                      <button className="text-purple-600 hover:text-purple-800 font-medium">
                        Max
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="gradient-bg text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition">
                Request Withdrawal
              </button>
            </div>
          )}
          
          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Transaction History</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Type</th>
                      <th className="py-3 px-4 text-left">Amount</th>
                      <th className="py-3 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4">{transaction.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            transaction.type === 'Deposit' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className="py-3 px-4">{transaction.amount}</td>
                        <td className="py-3 px-4">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wallet;
