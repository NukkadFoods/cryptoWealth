import React from 'react';

const InvestmentPlans = () => {
  const plans = [
    {
      name: 'Starter Plan',
      description: 'Perfect for beginners',
      amount: '$12',
      duration: '50 Days',
      bonus: 'Principal Return',
      popular: false
    },
    {
      name: 'Advanced Plan',
      description: 'Most Popular',
      amount: '$32',
      duration: '60 Days',
      bonus: 'Principal + 20% Bonus',
      popular: true
    },
    {
      name: 'Premium Plan',
      description: 'For serious investors',
      amount: '$59',
      duration: '90 Days',
      bonus: 'Principal + 30% Bonus',
      popular: false
    }
  ];

  const handleInvestment = (planName) => {
    alert(`You selected the ${planName}. Redirecting to payment...`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Investment Plans</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Choose from our flexible investment plans and start earning 2% daily returns on your capital.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`investment-card bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md border ${
                plan.popular 
                  ? 'border-2 border-purple-300 transform scale-105 shadow-lg' 
                  : 'border-purple-100'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-800">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  plan.popular 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  2% Daily
                </div>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-purple-800 mb-2">{plan.amount}</p>
                <p className="text-gray-600">Minimum Investment</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-2"></i>
                  <span>2% Daily Returns</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-2"></i>
                  <span>{plan.duration}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-2"></i>
                  <span>{plan.bonus}</span>
                </li>
              </ul>
              <button 
                onClick={() => handleInvestment(plan.name)}
                className="w-full gradient-bg text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
