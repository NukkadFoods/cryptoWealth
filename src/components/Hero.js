import React from 'react';
import { Link } from 'react-router-dom';
import { useInvestmentCalculator } from '../hooks/useInvestmentCalculator';

const Hero = () => {
  const { amount, setAmount, days, setDays, result, calculate } = useInvestmentCalculator();

  const handleCalculate = () => {
    if (!calculate()) {
      alert('Please enter valid amount and duration');
    }
  };

  return (
    <section className="gradient-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Earn 2% Daily On Your Crypto Investments
            </h1>
            <p className="text-xl mb-8">
              Join thousands of investors growing their wealth with our secure crypto investment platform.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/signup"
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition"
              >
                Start Investing
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-purple-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 max-w-md w-full card-hover">
              <h3 className="text-xl font-bold mb-4">Investment Calculator</h3>
              <div className="mb-4">
                <label className="block mb-2">Investment Amount ($)</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-white placeholder-opacity-70" 
                  placeholder="Enter amount"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Duration (Days)</label>
                <input 
                  type="number" 
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-white placeholder-opacity-70" 
                  placeholder="Enter days"
                />
              </div>
              <button 
                onClick={handleCalculate}
                className="w-full bg-white text-purple-700 py-2 rounded-lg font-bold mb-4 hover:bg-purple-50 transition"
              >
                Calculate Earnings
              </button>
              {result && (
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="font-medium">
                    Estimated Earnings: <span className="font-bold">${result.total}</span>
                  </p>
                  <p className="text-sm">
                    Daily: <span className="font-bold">${result.daily}</span> (2%)
                  </p>
                  <p className="text-sm mt-1">
                    Final Amount: <span className="font-bold">${result.finalAmount}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
