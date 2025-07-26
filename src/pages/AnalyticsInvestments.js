import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AnalyticsInvestments = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const investmentData = [
    { date: '2024-01-01', amount: 1200, growth: '+15%', category: 'Basic' },
    { date: '2024-01-02', amount: 1850, growth: '+22%', category: 'Premium' },
    { date: '2024-01-03', amount: 2100, growth: '+18%', category: 'VIP' },
    { date: '2024-01-04', amount: 980, growth: '+12%', category: 'Basic' },
    { date: '2024-01-05', amount: 2450, growth: '+25%', category: 'Elite' },
    { date: '2024-01-06', amount: 1750, growth: '+20%', category: 'Premium' },
    { date: '2024-01-07', amount: 3200, growth: '+30%', category: 'Elite' }
  ];

  const categoryStats = [
    { name: 'Basic Investment', total: 25420, count: 142, avgReturn: '12%' },
    { name: 'Premium Investment', total: 89750, count: 98, avgReturn: '18%' },
    { name: 'VIP Investment', total: 156800, count: 67, avgReturn: '22%' },
    { name: 'Elite Investment', total: 245600, count: 23, avgReturn: '28%' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Investment Trends</h1>
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

        {/* Investment Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryStats.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-white font-bold mb-2">{category.name}</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-300">${category.total.toLocaleString()}</div>
                <div className="text-sm text-purple-300">{category.count} investors</div>
                <div className="text-sm text-green-400">Avg Return: {category.avgReturn}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Trends Chart */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">Daily Investment Flow</h2>
          <div className="space-y-4">
            {investmentData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-purple-300">{data.date}</div>
                  <div className="bg-purple-600/20 px-3 py-1 rounded-full text-purple-300 text-sm">
                    {data.category}
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-white font-medium">${data.amount.toLocaleString()}</div>
                  <div className="text-green-400 font-medium">{data.growth}</div>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-300 h-2 rounded-full" 
                      style={{width: `${(data.amount / 3500) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Analysis */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-6">ROI Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">18.5%</div>
              <div className="text-purple-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$517,570</div>
              <div className="text-purple-300">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">330</div>
              <div className="text-purple-300">Active Investments</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsInvestments;
