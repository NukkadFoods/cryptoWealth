import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AnalyticsPerformance = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const performanceMetrics = [
    { label: 'Platform Uptime', value: '99.9%', change: '+0.1%', icon: 'server', color: 'green' },
    { label: 'Transaction Success', value: '98.7%', change: '+1.2%', icon: 'check-circle', color: 'green' },
    { label: 'Average Response Time', value: '0.3s', change: '-0.1s', icon: 'clock', color: 'blue' },
    { label: 'Error Rate', value: '0.02%', change: '-0.01%', icon: 'exclamation-triangle', color: 'red' }
  ];

  const systemMetrics = [
    { component: 'Authentication System', status: 'Optimal', responseTime: '0.12s', uptime: '99.98%' },
    { component: 'Payment Processing', status: 'Good', responseTime: '0.45s', uptime: '99.85%' },
    { component: 'Database Performance', status: 'Optimal', responseTime: '0.08s', uptime: '99.99%' },
    { component: 'API Gateway', status: 'Good', responseTime: '0.25s', uptime: '99.92%' },
    { component: 'Blockchain Integration', status: 'Optimal', responseTime: '0.35s', uptime: '99.95%' }
  ];

  const securityMetrics = [
    { metric: 'Failed Login Attempts', value: '247', severity: 'low' },
    { metric: 'Suspicious Activities', value: '12', severity: 'medium' },
    { metric: 'Blocked IP Addresses', value: '89', severity: 'high' },
    { metric: 'Security Scans', value: '1,245', severity: 'info' }
  ];

  const performanceTrends = [
    { date: '2024-01-01', transactions: 1240, successRate: 98.5, avgTime: 0.32 },
    { date: '2024-01-02', transactions: 1580, successRate: 98.7, avgTime: 0.28 },
    { date: '2024-01-03', transactions: 1320, successRate: 99.1, avgTime: 0.25 },
    { date: '2024-01-04', transactions: 1890, successRate: 98.9, avgTime: 0.30 },
    { date: '2024-01-05', transactions: 2100, successRate: 99.2, avgTime: 0.27 },
    { date: '2024-01-06', transactions: 1750, successRate: 98.8, avgTime: 0.31 },
    { date: '2024-01-07', transactions: 2250, successRate: 99.0, avgTime: 0.29 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Performance Analytics</h1>
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

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-${metric.color}-600/20 p-3 rounded-lg`}>
                  <i className={`fas fa-${metric.icon} text-${metric.color}-400 text-xl`}></i>
                </div>
                <span className={`text-${metric.change.startsWith('+') ? 'green' : metric.change.startsWith('-') ? 'red' : 'blue'}-400 text-sm font-medium`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-purple-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* System Health */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">System Health Monitor</h2>
          <div className="space-y-4">
            {systemMetrics.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${system.status === 'Optimal' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <div className="text-white font-medium">{system.component}</div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-white text-sm">{system.responseTime}</div>
                    <div className="text-purple-300 text-xs">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-sm">{system.uptime}</div>
                    <div className="text-purple-300 text-xs">Uptime</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    system.status === 'Optimal' ? 'bg-green-900/20 text-green-400' : 'bg-yellow-900/20 text-yellow-400'
                  }`}>
                    {system.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Performance Trends</h2>
          <div className="space-y-4">
            {performanceTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="text-purple-300">{trend.date}</div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-white font-medium">{trend.transactions}</div>
                    <div className="text-purple-300 text-sm">Transactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-medium">{trend.successRate}%</div>
                    <div className="text-purple-300 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-medium">{trend.avgTime}s</div>
                    <div className="text-purple-300 text-sm">Avg Time</div>
                  </div>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-300 h-2 rounded-full" 
                      style={{width: `${(trend.transactions / 2500) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Security Metrics</h3>
            <div className="space-y-3">
              {securityMetrics.map((security, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg">
                  <span className="text-purple-300">{security.metric}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">{security.value}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      security.severity === 'low' ? 'bg-green-500' :
                      security.severity === 'medium' ? 'bg-yellow-500' :
                      security.severity === 'high' ? 'bg-red-500' : 'bg-blue-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Resource Utilization</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-purple-300">CPU Usage</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <span className="text-white font-medium">65%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Memory Usage</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <span className="text-white font-medium">78%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Disk Usage</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <span className="text-white font-medium">45%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-purple-300">Network I/O</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '52%'}}></div>
                  </div>
                  <span className="text-white font-medium">52%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPerformance;
