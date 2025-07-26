import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AffiliatePage = () => {
  const [referrals, setReferrals] = useState([
    { id: 1, name: 'John Doe', email: 'john@email.com', status: 'Active', earnings: 50, joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', status: 'Active', earnings: 75, joinDate: '2024-01-10' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', status: 'Pending', earnings: 0, joinDate: '2024-01-20' }
  ]);

  const [affiliateStats] = useState({
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarnings: 450,
    thisMonthEarnings: 125
  });

  const referralLink = 'https://cryptowealth.com/ref/USER123';

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Affiliate Program</h1>
          <div className="bg-green-600/20 px-4 py-2 rounded-lg">
            <span className="text-green-300">Total Earned: </span>
            <span className="text-green-400 font-bold">${affiliateStats.totalEarnings}</span>
          </div>
        </div>

        {/* Affiliate Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-600/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">{affiliateStats.totalReferrals}</div>
            <div className="text-blue-300 mt-2">Total Referrals</div>
          </div>
          <div className="bg-green-600/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400">{affiliateStats.activeReferrals}</div>
            <div className="text-green-300 mt-2">Active Referrals</div>
          </div>
          <div className="bg-purple-600/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">${affiliateStats.totalEarnings}</div>
            <div className="text-purple-300 mt-2">Total Earnings</div>
          </div>
          <div className="bg-yellow-600/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400">${affiliateStats.thisMonthEarnings}</div>
            <div className="text-yellow-300 mt-2">This Month</div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Your Referral Link</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={referralLink}
              readOnly
              autocomplete="off"
              className="flex-1 bg-slate-700 text-white p-3 rounded-lg border border-slate-600"
            />
            <button
              onClick={copyReferralLink}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <i className="fas fa-copy mr-2"></i>
              Copy
            </button>
          </div>
          <p className="text-slate-400 mt-3">
            Share this link to earn 10% commission on every investment made by your referrals!
          </p>
        </div>

        {/* Commission Structure */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Commission Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">10%</div>
              <div className="text-purple-300">Level 1 (Direct)</div>
              <div className="text-slate-400 text-sm mt-1">From direct referrals</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">5%</div>
              <div className="text-blue-300">Level 2</div>
              <div className="text-slate-400 text-sm mt-1">From their referrals</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">2%</div>
              <div className="text-green-300">Level 3</div>
              <div className="text-slate-400 text-sm mt-1">From 3rd level</div>
            </div>
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Referrals</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-purple-300 py-3">Name</th>
                  <th className="text-left text-purple-300 py-3">Email</th>
                  <th className="text-left text-purple-300 py-3">Status</th>
                  <th className="text-left text-purple-300 py-3">Earnings</th>
                  <th className="text-left text-purple-300 py-3">Join Date</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map(referral => (
                  <tr key={referral.id} className="border-b border-slate-700">
                    <td className="text-white py-3">{referral.name}</td>
                    <td className="text-slate-300 py-3">{referral.email}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        referral.status === 'Active' 
                          ? 'bg-green-600/20 text-green-400' 
                          : 'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        {referral.status}
                      </span>
                    </td>
                    <td className="text-green-400 py-3">${referral.earnings}</td>
                    <td className="text-slate-300 py-3">{referral.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AffiliatePage;
