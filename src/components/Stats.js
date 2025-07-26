import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { formatCurrency } from '../utils/helpers';

const Stats = () => {
  const { stats } = useContext(UserContext);

  const displayStats = [
    { value: formatCurrency(stats.totalInvested), label: 'Total Invested' },
    { value: stats.activeInvestors.toLocaleString(), label: 'Active Investors' },
    { value: formatCurrency(stats.totalPaid), label: 'Paid Yesterday' },
    { value: `${stats.successRate}%`, label: 'Success Rate' }
  ];

  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {displayStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
