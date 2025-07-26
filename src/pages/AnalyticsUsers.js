import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AnalyticsUsers = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const userGrowthData = [
    { date: '2024-01-01', newUsers: 45, activeUsers: 1240, retention: '85%' },
    { date: '2024-01-02', newUsers: 52, activeUsers: 1285, retention: '87%' },
    { date: '2024-01-03', newUsers: 38, activeUsers: 1320, retention: '86%' },
    { date: '2024-01-04', newUsers: 67, activeUsers: 1380, retention: '88%' },
    { date: '2024-01-05', newUsers: 74, activeUsers: 1445, retention: '89%' },
    { date: '2024-01-06', newUsers: 59, activeUsers: 1495, retention: '87%' },
    { date: '2024-01-07', newUsers: 81, activeUsers: 1570, retention: '90%' }
  ];

  const userSegments = [
    { segment: 'New Users (0-7 days)', count: 245, percentage: 15.6, color: 'blue' },
    { segment: 'Active Users (7-30 days)', count: 587, percentage: 37.4, color: 'green' },
    { segment: 'Regular Users (30-90 days)', count: 423, percentage: 26.9, color: 'purple' },
    { segment: 'Veteran Users (90+ days)', count: 315, percentage: 20.1, color: 'yellow' }
  ];

  const userMetrics = [
    { label: 'Total Users', value: '3,247', change: '+12.5%', icon: 'users' },
    { label: 'Active Users', value: '1,570', change: '+8.3%', icon: 'user-check' },
    { label: 'New Signups', value: '416', change: '+15.7%', icon: 'user-plus' },
    { label: 'User Retention', value: '87.8%', change: '+2.1%', icon: 'chart-line' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">User Growth Analytics</h1>
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

        {/* User Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userMetrics.map((metric, index) => (
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

        {/* User Growth Chart */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Daily User Growth</h2>
          <div className="space-y-4">
            {userGrowthData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="text-purple-300">{data.date}</div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-white font-medium">{data.newUsers}</div>
                    <div className="text-purple-300 text-sm">New Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-medium">{data.activeUsers}</div>
                    <div className="text-purple-300 text-sm">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-medium">{data.retention}</div>
                    <div className="text-purple-300 text-sm">Retention</div>
                  </div>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-300 h-2 rounded-full" 
                      style={{width: `${(data.newUsers / 100) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Segments */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">User Segments</h2>
          <div className="space-y-4">
            {userSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full bg-${segment.color}-500`}></div>
                  <div className="text-white">{segment.segment}</div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-white font-medium">{segment.count} users</div>
                  <div className="text-purple-300">{segment.percentage}%</div>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`bg-${segment.color}-500 h-2 rounded-full`}
                      style={{width: `${segment.percentage * 2}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Behavior Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Top User Actions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Dashboard Views</span>
                <span className="text-white font-medium">12,547</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Investment Actions</span>
                <span className="text-white font-medium">3,892</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Wallet Operations</span>
                <span className="text-white font-medium">2,156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Referral Shares</span>
                <span className="text-white font-medium">1,423</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Geographic Distribution</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">🇺🇸 United States</span>
                <span className="text-white font-medium">28.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">🇮🇳 India</span>
                <span className="text-white font-medium">22.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">🇬🇧 United Kingdom</span>
                <span className="text-white font-medium">15.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">🇨🇦 Canada</span>
                <span className="text-white font-medium">12.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">🌍 Others</span>
                <span className="text-white font-medium">21.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsUsers;
