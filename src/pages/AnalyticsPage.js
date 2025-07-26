import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');
  const [realTimeData, setRealTimeData] = useState({
    totalBalance: 1245.89,
    hourlyEarnings: 17.00,
    affiliateEarnings: 325.50,
    nextPayoutMinutes: 23,
    referrals: 12,
    weeklyGrowth: 5
  });
  
  const [analyticsData] = useState({
    totalInvestments: 15420,
    totalUsers: 3240,
    activeInvestments: 8910,
    pendingWithdrawals: 1250,
    dailyROI: 2.5,
    monthlyGrowth: 12.8,
    conversionRate: 15.2,
    avgInvestment: 475
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        nextPayoutMinutes: prev.nextPayoutMinutes > 0 ? prev.nextPayoutMinutes - 1 : 59,
        hourlyEarnings: prev.hourlyEarnings + (Math.random() * 0.1 - 0.05)
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const [chartData] = useState([
    { date: '2024-01-14', investments: 1200, earnings: 30, users: 25 },
    { date: '2024-01-15', investments: 1580, earnings: 39.5, users: 32 },
    { date: '2024-01-16', investments: 980, earnings: 24.5, users: 18 },
    { date: '2024-01-17', investments: 2100, earnings: 52.5, users: 41 },
    { date: '2024-01-18', investments: 1750, earnings: 43.75, users: 35 },
    { date: '2024-01-19', investments: 2250, earnings: 56.25, users: 38 },
    { date: '2024-01-20', investments: 1890, earnings: 47.25, users: 29 }
  ]);

  const [topInvestors] = useState([
    { rank: 1, name: 'John Doe', amount: 25000, growth: '+15.2%' },
    { rank: 2, name: 'Sarah Wilson', amount: 18500, growth: '+12.8%' },
    { rank: 3, name: 'Mike Johnson', amount: 16200, growth: '+18.5%' },
    { rank: 4, name: 'Emily Davis', amount: 14800, growth: '+9.7%' },
    { rank: 5, name: 'David Brown', amount: 13500, growth: '+11.3%' }
  ]);

  const analyticsMenuTabs = [
    { id: 'overview', label: 'Overview', icon: 'fa-tachometer-alt' },
    { id: 'investments', label: 'Investment Trends', icon: 'fa-chart-line' },
    { id: 'users', label: 'User Growth', icon: 'fa-user-chart' },
    { id: 'performance', label: 'Performance', icon: 'fa-trophy' },
    { id: 'earnings', label: 'Earnings Report', icon: 'fa-coins' },
    { id: 'referrals', label: 'Referral Stats', icon: 'fa-share-alt' }
  ];

  // Overview Tab Content
  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Real-time Stats Cards */}
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4">Investment Trends</h2>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-purple-300 text-sm">{data.date}</span>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-white font-medium">${data.investments}</div>
                    <div className="text-green-400 text-sm">+${data.earnings}</div>
                  </div>
                  <div className="w-20 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{width: `${(data.investments / 2500) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4">Top Investors</h2>
          <div className="space-y-3">
            {topInvestors.map((investor) => (
              <div key={investor.rank} className="flex items-center justify-between p-3 bg-purple-900/30 rounded-lg border border-purple-500/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {investor.rank}
                  </div>
                  <div>
                    <div className="text-white font-medium">{investor.name}</div>
                    <div className="text-purple-300 text-sm">${investor.amount.toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-green-400 font-medium">{investor.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Investment Trends Tab
  const renderInvestmentsTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Investment Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <h3 className="text-white font-bold mb-2">Basic Investment</h3>
          <div className="text-2xl font-bold text-purple-300">$25,420</div>
          <div className="text-sm text-purple-300">142 investors</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <h3 className="text-white font-bold mb-2">Premium Investment</h3>
          <div className="text-2xl font-bold text-purple-300">$89,750</div>
          <div className="text-sm text-purple-300">98 investors</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <h3 className="text-white font-bold mb-2">VIP Investment</h3>
          <div className="text-2xl font-bold text-purple-300">$156,800</div>
          <div className="text-sm text-purple-300">67 investors</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <h3 className="text-white font-bold mb-2">Elite Investment</h3>
          <div className="text-2xl font-bold text-purple-300">$245,600</div>
          <div className="text-sm text-purple-300">23 investors</div>
        </div>
      </div>
    </div>
  );

  // User Growth Tab
  const renderUsersTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">User Growth Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">3,247</div>
          <div className="text-purple-300">Total Users</div>
          <div className="text-green-400 text-sm">+12.5%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">1,570</div>
          <div className="text-purple-300">Active Users</div>
          <div className="text-green-400 text-sm">+8.3%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">416</div>
          <div className="text-purple-300">New Signups</div>
          <div className="text-green-400 text-sm">+15.7%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">87.8%</div>
          <div className="text-purple-300">User Retention</div>
          <div className="text-green-400 text-sm">+2.1%</div>
        </div>
      </div>
    </div>
  );

  // Performance Tab
  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Performance Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-purple-300">Platform Uptime</div>
          <div className="text-green-400 text-sm">+0.1%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">98.7%</div>
          <div className="text-purple-300">Success Rate</div>
          <div className="text-green-400 text-sm">+1.2%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">0.3s</div>
          <div className="text-purple-300">Response Time</div>
          <div className="text-green-400 text-sm">-0.1s</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">0.02%</div>
          <div className="text-purple-300">Error Rate</div>
          <div className="text-green-400 text-sm">-0.01%</div>
        </div>
      </div>
    </div>
  );

  // Earnings Tab
  const renderEarningsTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Earnings Report</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">$127,450</div>
          <div className="text-purple-300">Total Earnings</div>
          <div className="text-green-400 text-sm">+15.2%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">$4,248</div>
          <div className="text-purple-300">Average Daily</div>
          <div className="text-green-400 text-sm">+8.7%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">$8,456</div>
          <div className="text-purple-300">Hourly ROI</div>
          <div className="text-green-400 text-sm">+12.3%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">2,847</div>
          <div className="text-purple-300">Active Earners</div>
          <div className="text-green-400 text-sm">+18.9%</div>
        </div>
      </div>
    </div>
  );

  // Referrals Tab
  const renderReferralsTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Referral Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">1,247</div>
          <div className="text-purple-300">Total Referrals</div>
          <div className="text-green-400 text-sm">+18.5%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">892</div>
          <div className="text-purple-300">Active Referrals</div>
          <div className="text-green-400 text-sm">+12.3%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">$15,420</div>
          <div className="text-purple-300">Referral Revenue</div>
          <div className="text-green-400 text-sm">+25.8%</div>
        </div>
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <div className="text-2xl font-bold text-white">15.6%</div>
          <div className="text-purple-300">Conversion Rate</div>
          <div className="text-green-400 text-sm">+3.2%</div>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <i className="fas fa-bell text-purple-300"></i>
              <div className="bg-purple-600 w-2 h-2 rounded-full absolute -right-1 -top-1"></div>
            </div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
          </div>
        </div>

        {/* Analytics Tabs */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <div className="flex flex-wrap gap-2 mb-6">
            {analyticsMenuTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/50 hover:text-white'
                }`}
              >
                <i className={`fas ${tab.icon} text-sm`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'investments' && renderInvestmentsTab()}
          {activeTab === 'users' && renderUsersTab()}
          {activeTab === 'performance' && renderPerformanceTab()}
          {activeTab === 'earnings' && renderEarningsTab()}
          {activeTab === 'referrals' && renderReferralsTab()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
