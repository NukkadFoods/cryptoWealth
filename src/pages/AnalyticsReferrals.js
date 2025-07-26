import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AnalyticsReferrals = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const referralMetrics = [
    { label: 'Total Referrals', value: '1,247', change: '+18.5%', icon: 'users' },
    { label: 'Active Referrals', value: '892', change: '+12.3%', icon: 'user-check' },
    { label: 'Referral Revenue', value: '$15,420', change: '+25.8%', icon: 'dollar-sign' },
    { label: 'Conversion Rate', value: '15.6%', change: '+3.2%', icon: 'chart-line' }
  ];

  const referralTrends = [
    { date: '2024-01-01', newReferrals: 45, activeReferrals: 128, earnings: 890.25, conversionRate: 14.2 },
    { date: '2024-01-02', newReferrals: 52, activeReferrals: 142, earnings: 1240.80, conversionRate: 15.8 },
    { date: '2024-01-03', newReferrals: 38, activeReferrals: 156, earnings: 980.45, conversionRate: 13.9 },
    { date: '2024-01-04', newReferrals: 67, activeReferrals: 178, earnings: 1580.90, conversionRate: 16.7 },
    { date: '2024-01-05', newReferrals: 74, activeReferrals: 198, earnings: 1890.35, conversionRate: 18.2 },
    { date: '2024-01-06', newReferrals: 59, activeReferrals: 215, earnings: 1420.70, conversionRate: 15.4 },
    { date: '2024-01-07', newReferrals: 81, activeReferrals: 238, earnings: 2140.55, conversionRate: 17.9 }
  ];

  const topReferrers = [
    { rank: 1, name: 'Alex Chen', referrals: 156, earnings: 4250.80, conversionRate: '24.5%', level: 'Diamond' },
    { rank: 2, name: 'Maria Garcia', referrals: 142, earnings: 3890.45, conversionRate: '22.1%', level: 'Platinum' },
    { rank: 3, name: 'James Wilson', referrals: 128, earnings: 3456.70, conversionRate: '20.8%', level: 'Gold' },
    { rank: 4, name: 'Sophie Brown', referrals: 115, earnings: 3120.25, conversionRate: '19.3%', level: 'Gold' },
    { rank: 5, name: 'David Kim', referrals: 98, earnings: 2675.90, conversionRate: '18.7%', level: 'Silver' }
  ];

  const referralLevels = [
    { level: 'Bronze', count: 342, percentage: 27.4, commission: '5%', color: 'orange' },
    { level: 'Silver', count: 458, percentage: 36.7, commission: '7%', color: 'gray' },
    { level: 'Gold', count: 289, percentage: 23.2, commission: '10%', color: 'yellow' },
    { level: 'Platinum', count: 118, percentage: 9.5, commission: '12%', color: 'blue' },
    { level: 'Diamond', count: 40, percentage: 3.2, commission: '15%', color: 'purple' }
  ];

  const referralSources = [
    { source: 'Direct Link', count: 487, percentage: 39.1 },
    { source: 'Social Media', count: 312, percentage: 25.0 },
    { source: 'Email Campaign', count: 234, percentage: 18.8 },
    { source: 'Word of Mouth', count: 156, percentage: 12.5 },
    { source: 'Other', count: 58, percentage: 4.6 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Referral Analytics</h1>
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

        {/* Referral Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referralMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <i className={`fas fa-${metric.icon} text-purple-400 text-xl`}></i>
                </div>
                <span className="text-green-400 text-sm font-medium">{metric.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-purple-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Referral Levels Distribution */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Referral Levels Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {referralLevels.map((level, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${level.color}-600/20 p-4 rounded-lg mb-4 mx-auto w-16 h-16 flex items-center justify-center`}>
                  <i className={`fas fa-medal text-${level.color}-400 text-2xl`}></i>
                </div>
                <div className="text-xl font-bold text-white mb-1">{level.count}</div>
                <div className="text-purple-300 text-sm mb-1">{level.level}</div>
                <div className={`text-${level.color}-400 text-sm`}>{level.commission} Commission</div>
                <div className="text-purple-300 text-xs mt-1">{level.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Trends */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Daily Referral Trends</h2>
          <div className="space-y-4">
            {referralTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="text-purple-300">{trend.date}</div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-white font-medium">{trend.newReferrals}</div>
                    <div className="text-purple-300 text-sm">New</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-medium">{trend.activeReferrals}</div>
                    <div className="text-purple-300 text-sm">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-medium">${trend.earnings.toFixed(2)}</div>
                    <div className="text-purple-300 text-sm">Earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-medium">{trend.conversionRate}%</div>
                    <div className="text-purple-300 text-sm">Conversion</div>
                  </div>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-300 h-2 rounded-full" 
                      style={{width: `${(trend.newReferrals / 100) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Referrers */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Top Referrers This Month</h2>
          <div className="space-y-4">
            {topReferrers.map((referrer) => (
              <div key={referrer.rank} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    referrer.rank === 1 ? 'bg-yellow-600' : 
                    referrer.rank === 2 ? 'bg-gray-400' : 
                    referrer.rank === 3 ? 'bg-orange-600' : 'bg-purple-600'
                  }`}>
                    {referrer.rank}
                  </div>
                  <div>
                    <div className="text-white font-medium">{referrer.name}</div>
                    <div className={`text-sm px-2 py-1 rounded-full inline-block ${
                      referrer.level === 'Diamond' ? 'bg-purple-600/20 text-purple-300' :
                      referrer.level === 'Platinum' ? 'bg-blue-600/20 text-blue-300' :
                      referrer.level === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-gray-600/20 text-gray-300'
                    }`}>
                      {referrer.level}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-white font-medium">{referrer.referrals}</div>
                    <div className="text-purple-300 text-sm">Referrals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-medium">${referrer.earnings.toLocaleString()}</div>
                    <div className="text-purple-300 text-sm">Earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-medium">{referrer.conversionRate}</div>
                    <div className="text-purple-300 text-sm">Conversion</div>
                  </div>
                  {referrer.rank <= 3 && (
                    <i className={`fas fa-trophy text-xl ${
                      referrer.rank === 1 ? 'text-yellow-400' : 
                      referrer.rank === 2 ? 'text-gray-300' : 'text-orange-400'
                    }`}></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Sources & Commission Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Referral Sources</h3>
            <div className="space-y-3">
              {referralSources.map((source, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg">
                  <span className="text-purple-300">{source.source}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{width: `${source.percentage * 2}%`}}
                      ></div>
                    </div>
                    <span className="text-white font-medium w-12 text-right">{source.count}</span>
                    <span className="text-purple-300 text-sm w-12 text-right">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Commission Structure</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Level 1 Commission</span>
                <span className="text-green-400 font-medium">10%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Level 2 Commission</span>
                <span className="text-green-400 font-medium">5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Level 3 Commission</span>
                <span className="text-green-400 font-medium">2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Bonus Threshold</span>
                <span className="text-blue-400 font-medium">25 Referrals</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Bonus Amount</span>
                <span className="text-purple-400 font-medium">$500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsReferrals;
