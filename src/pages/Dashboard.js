import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { formatCurrency } from '../utils/helpers';
import DashboardLayout from '../components/DashboardLayout';
import DepositModal from '../components/DepositModal';
import WithdrawModal from '../components/WithdrawModal';

const Dashboard = () => {
  const { user, staticUserData } = useContext(UserContext);
  
  // Use staticUserData for display if user is logged in
  const displayUserData = user ? staticUserData : null;
  const [realTimeData, setRealTimeData] = useState({
    totalBalance: 1245.89,
    hourlyEarnings: 17.00,
    affiliateEarnings: 325.50,
    nextPayoutMinutes: 23,
    referrals: 12,
    weeklyGrowth: 5
  });

  // Modal states
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        nextPayoutMinutes: prev.nextPayoutMinutes > 0 ? prev.nextPayoutMinutes - 1 : 59,
        hourlyEarnings: prev.hourlyEarnings + (Math.random() * 0.02 - 0.01)
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const investmentPlans = [
    { name: 'Basic Investment', amount: 12.00, hourlyRate: '2%', description: 'Invest $12 and earn 2% every hour' },
    { name: 'Standard Investment', amount: 39.00, hourlyRate: '2%', description: 'Invest $39 and earn 2% every hour' },
    { name: 'Premium Investment', amount: 99.00, hourlyRate: '2%', description: 'Invest $99 and earn 2% every hour' },
    { name: 'Advanced Investment', amount: 151.00, hourlyRate: '2%', description: 'Invest $151 and earn 2% every hour' },
    { name: 'VIP Investment', amount: 499.00, hourlyRate: '2%', description: 'Invest $499 and earn 2% every hour' },
    { name: 'Elite Investment', amount: 999.00, hourlyRate: '2%', description: 'Invest $999 and earn 2% every hour' }
  ];

  const recentActivities = [
    { type: 'Investment', description: 'Premium Plan', amount: 99, status: 'Completed', time: '2 hours ago', icon: 'arrow-up' },
    { type: 'Earnings', description: 'Hourly ROI', amount: 1.98, status: 'Completed', time: '1 hour ago', icon: 'coins' },
    { type: 'Referral', description: 'New signup', amount: 10, status: 'Completed', time: '3 hours ago', icon: 'users' },
    { type: 'Withdrawal', description: 'BTC Wallet', amount: -50, status: 'Pending', time: '5 hours ago', icon: 'arrow-down' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowDepositModal(true)}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2"
            >
              <i className="fas fa-plus"></i>
              <span>Deposit</span>
            </button>
            <button
              onClick={() => setShowWithdrawModal(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2"
            >
              <i className="fas fa-minus"></i>
              <span>Withdraw</span>
            </button>
            <div className="relative">
              <i className="fas fa-bell text-purple-300"></i>
              <div className="bg-purple-600 w-2 h-2 rounded-full absolute -right-1 -top-1"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Matching your HTML design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/50 to-slate-900 p-6 rounded-xl card-glow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-green-300">Total Balance</p>
                <h3 className="text-2xl font-bold mt-2 text-white">${realTimeData.totalBalance.toFixed(2)}</h3>
              </div>
              <div className="bg-green-600/20 p-3 rounded-lg">
                <i className="fas fa-wallet text-green-500"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Invested: $850.00</span>
                <span className="text-green-400">+2.5%</span>
              </div>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-600 to-green-400 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/50 to-slate-900 p-6 rounded-xl card-glow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-emerald-300">Hourly Earnings</p>
                <h3 className="text-2xl font-bold mt-2 text-white">${realTimeData.hourlyEarnings.toFixed(2)}</h3>
              </div>
              <div className="bg-emerald-600/20 p-3 rounded-lg">
                <i className="fas fa-clock text-emerald-500"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Next payout in: {realTimeData.nextPayoutMinutes} min</span>
                <span className="text-emerald-400">2% ROI</span>
              </div>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-2 rounded-full" 
                     style={{width: `${100 - (realTimeData.nextPayoutMinutes / 60) * 100}%`}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-900/50 to-slate-900 p-6 rounded-xl card-glow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-teal-300">Affiliate Earnings</p>
                <h3 className="text-2xl font-bold mt-2 text-white">${realTimeData.affiliateEarnings.toFixed(2)}</h3>
              </div>
              <div className="bg-teal-600/20 p-3 rounded-lg">
                <i className="fas fa-users text-teal-500"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Referrals: {realTimeData.referrals}</span>
                <span className="text-green-400">+{realTimeData.weeklyGrowth} this week</span>
              </div>
              <div className="bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Tasks Section - Matching your HTML design */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Available Tasks</h3>
            <button className="text-purple-400 hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {investmentPlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900 p-5 rounded-lg border border-purple-900/50 hover:border-purple-600 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-white">{plan.name}</h4>
                  <span className="bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded">{plan.hourlyRate} hourly</span>
                </div>
                <p className="text-sm text-purple-300 mb-4">{plan.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">${plan.amount.toFixed(2)}</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity - Matching your HTML design */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Recent Activity</h3>
            <button className="text-purple-400 hover:underline">View All</button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-purple-900/50">
                <tr>
                  <th className="text-left p-4 text-purple-300">Transaction</th>
                  <th className="text-left p-4 text-purple-300">Amount</th>
                  <th className="text-left p-4 text-purple-300">Status</th>
                  <th className="text-left p-4 text-purple-300">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity, index) => (
                  <tr key={index} className="border-b border-purple-900/50 hover:bg-purple-900/20">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="bg-purple-600/20 p-2 rounded-lg mr-3">
                          <i className={`fas fa-${activity.icon} text-purple-400`}></i>
                        </div>
                        <div>
                          <p className="font-medium text-white">{activity.type}</p>
                          <p className="text-sm text-purple-300">{activity.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-white">
                      {activity.amount > 0 ? '+' : ''}${Math.abs(activity.amount).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        activity.status === 'Completed' 
                          ? 'bg-green-900/20 text-green-400' 
                          : 'bg-yellow-900/20 text-yellow-400'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="p-4 text-purple-300">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DepositModal 
        isOpen={showDepositModal} 
        onClose={() => setShowDepositModal(false)} 
      />
      <WithdrawModal 
        isOpen={showWithdrawModal} 
        onClose={() => setShowWithdrawModal(false)} 
      />
    </DashboardLayout>
  );
};

export default Dashboard;
