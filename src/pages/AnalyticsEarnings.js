import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AnalyticsEarnings = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const earningsData = [
    { date: '2024-01-01', totalEarnings: 2450.80, hourlyEarnings: 102.12, affiliateEarnings: 340.25, bonusEarnings: 180.00 },
    { date: '2024-01-02', totalEarnings: 2890.45, hourlyEarnings: 120.30, affiliateEarnings: 425.80, bonusEarnings: 220.50 },
    { date: '2024-01-03', totalEarnings: 2156.90, hourlyEarnings: 89.87, affiliateEarnings: 298.45, bonusEarnings: 150.75 },
    { date: '2024-01-04', totalEarnings: 3245.70, hourlyEarnings: 135.24, affiliateEarnings: 520.90, bonusEarnings: 275.30 },
    { date: '2024-01-05', totalEarnings: 3890.25, hourlyEarnings: 162.09, affiliateEarnings: 680.15, bonusEarnings: 320.85 },
    { date: '2024-01-06', totalEarnings: 2750.60, hourlyEarnings: 114.61, affiliateEarnings: 385.70, bonusEarnings: 195.40 },
    { date: '2024-01-07', totalEarnings: 4125.90, hourlyEarnings: 171.91, affiliateEarnings: 725.50, bonusEarnings: 380.25 }
  ];

  const earningsBreakdown = [
    { category: 'Hourly ROI', amount: 8456.78, percentage: 52.3, icon: 'clock', color: 'purple' },
    { category: 'Affiliate Commissions', amount: 3890.45, percentage: 24.1, icon: 'users', color: 'green' },
    { category: 'Investment Bonuses', amount: 2156.90, percentage: 13.3, icon: 'gift', color: 'blue' },
    { category: 'Referral Rewards', amount: 1678.23, percentage: 10.3, icon: 'share-alt', color: 'yellow' }
  ];

  const topEarners = [
    { rank: 1, name: 'Michael Chen', earnings: 15420.80, growth: '+28.5%', type: 'Elite Investor' },
    { rank: 2, name: 'Sarah Williams', earnings: 12890.45, growth: '+22.1%', type: 'VIP Investor' },
    { rank: 3, name: 'David Rodriguez', earnings: 11245.70, growth: '+35.2%', type: 'Premium Investor' },
    { rank: 4, name: 'Emma Thompson', earnings: 9876.25, growth: '+18.7%', type: 'VIP Investor' },
    { rank: 5, name: 'Alex Johnson', earnings: 8756.90, growth: '+25.4%', type: 'Premium Investor' }
  ];

  const earningsSummary = [
    { label: 'Total Earnings', value: '$127,450.89', change: '+15.2%', icon: 'coins' },
    { label: 'Average Daily', value: '$4,248.36', change: '+8.7%', icon: 'calendar-day' },
    { label: 'Highest Single Day', value: '$6,890.45', change: '+12.3%', icon: 'arrow-up' },
    { label: 'Active Earners', value: '2,847', change: '+18.9%', icon: 'user-check' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Earnings Report</h1>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>

        {/* Earnings Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earningsSummary.map((summary, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <i className={`fas fa-${summary.icon} text-purple-400 text-xl`}></i>
                </div>
                <span className="text-green-400 text-sm font-medium">{summary.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{summary.value}</div>
              <div className="text-purple-300 text-sm">{summary.label}</div>
            </div>
          ))}
        </div>

        {/* Earnings Breakdown */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Earnings Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earningsBreakdown.map((breakdown, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${breakdown.color}-600/20 p-4 rounded-lg mb-4 mx-auto w-16 h-16 flex items-center justify-center`}>
                  <i className={`fas fa-${breakdown.icon} text-${breakdown.color}-400 text-2xl`}></i>
                </div>
                <div className="text-2xl font-bold text-white mb-1">${breakdown.amount.toLocaleString()}</div>
                <div className="text-purple-300 text-sm mb-2">{breakdown.category}</div>
                <div className={`text-${breakdown.color}-400 font-medium`}>{breakdown.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Earnings Trend */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Daily Earnings Trend</h2>
          <div className="space-y-4">
            {earningsData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="text-purple-300">{data.date}</div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-white font-medium">${data.totalEarnings.toFixed(2)}</div>
                    <div className="text-purple-300 text-sm">Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-medium">${data.hourlyEarnings.toFixed(2)}</div>
                    <div className="text-purple-300 text-sm">Hourly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-medium">${data.affiliateEarnings.toFixed(2)}</div>
                    <div className="text-purple-300 text-sm">Affiliate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-medium">${data.bonusEarnings.toFixed(2)}</div>
                    <div className="text-purple-300 text-sm">Bonus</div>
                  </div>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-300 h-2 rounded-full" 
                      style={{width: `${(data.totalEarnings / 5000) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Earners */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Top Earners This Month</h2>
          <div className="space-y-4">
            {topEarners.map((earner) => (
              <div key={earner.rank} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    earner.rank === 1 ? 'bg-yellow-600' : 
                    earner.rank === 2 ? 'bg-gray-400' : 
                    earner.rank === 3 ? 'bg-orange-600' : 'bg-purple-600'
                  }`}>
                    {earner.rank}
                  </div>
                  <div>
                    <div className="text-white font-medium">{earner.name}</div>
                    <div className="text-purple-300 text-sm">{earner.type}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="text-white font-medium">${earner.earnings.toLocaleString()}</div>
                    <div className="text-green-400 text-sm">{earner.growth}</div>
                  </div>
                  {earner.rank <= 3 && (
                    <i className={`fas fa-trophy text-xl ${
                      earner.rank === 1 ? 'text-yellow-400' : 
                      earner.rank === 2 ? 'text-gray-300' : 'text-orange-400'
                    }`}></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings Projections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Projected Earnings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Next 7 Days</span>
                <span className="text-white font-medium">$29,750</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Next 30 Days</span>
                <span className="text-white font-medium">$127,890</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">End of Quarter</span>
                <span className="text-white font-medium">$384,560</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Annual Projection</span>
                <span className="text-green-400 font-bold text-lg">$1,547,280</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Earnings Milestones</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">First $100K</span>
                <span className="text-green-400">✓ Achieved</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">First $500K</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <span className="text-purple-300 text-sm">25%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">First $1M</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '13%'}}></div>
                  </div>
                  <span className="text-purple-300 text-sm">13%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsEarnings;
