import React from 'react';

const AboutUs = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Professional Trader",
      rating: 5,
      comment: "CryptoWealth has revolutionized my investment strategy. The consistent 2% hourly returns through their funded account partnerships are incredible. I've earned over $5,000 in just 3 months!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format",
      earnings: "$5,247"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Crypto Investor",
      rating: 5,
      comment: "The transparency is amazing! Knowing my funds provide liquidity to top prop firms while earning fixed commissions gives me confidence. Best investment platform I've used.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=64&h=64&fit=crop&crop=face&auto=format",
      earnings: "$3,892"
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Financial Analyst",
      rating: 5,
      comment: "CryptoWealth's model is genius - partnering with funded account firms means stable returns regardless of market conditions. I've been earning consistently for 6 months now.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format",
      earnings: "$8,156"
    },
    {
      id: 4,
      name: "Emma Johnson",
      role: "Investment Manager",
      rating: 5,
      comment: "The hourly payouts are real! I love how my money works 24/7 providing liquidity to professional traders. The affiliate program is also very rewarding.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format",
      earnings: "$4,523"
    }
  ];

  const partnerFirms = [
    {
      name: "FTMO",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&auto=format",
      traders: "15,000+",
      capital: "$2.5B"
    },
    {
      name: "TopStep",
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=120&h=60&fit=crop&auto=format",
      traders: "12,000+",
      capital: "$1.8B"
    },
    {
      name: "The5%ers",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format",
      traders: "8,500+",
      capital: "$1.2B"
    },
    {
      name: "MyForexFunds",
      logo: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=120&h=60&fit=crop&auto=format",
      traders: "20,000+",
      capital: "$3.1B"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900 relative">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-purple-900/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
            About CryptoWealth
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Revolutionary Investment Platform Connecting Investors with Top-Tier Trading Firms
          </p>
        </div>

        {/* Business Model Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-8 rounded-2xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600/30 p-3 rounded-lg mr-4">
                  <i className="fas fa-handshake text-purple-300 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Business Model</h3>
              </div>
              <p className="text-purple-100 text-lg leading-relaxed">
                CryptoWealth partners with top-tier funded account trading firms to provide liquidity to their professional traders. 
                We distribute user investments across these established firms, earning <span className="text-purple-300 font-semibold">fixed commissions</span> for providing capital access.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-8 rounded-2xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-600/30 p-3 rounded-lg mr-4">
                  <i className="fas fa-shield-alt text-green-300 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Risk-Free Returns</h3>
              </div>
              <p className="text-purple-100 text-lg leading-relaxed">
                <span className="text-green-300 font-semibold">Whether traders profit or lose</span>, we receive our guaranteed commission. 
                This means your returns are <span className="text-purple-300 font-semibold">independent of trading performance</span> and market volatility.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-8 rounded-2xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/30 p-3 rounded-lg mr-4">
                  <i className="fas fa-chart-line text-blue-300 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">How It Works</h3>
              </div>
              <div className="space-y-3 text-purple-100">
                <div className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <p>Users invest through our platform</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <p>Funds are allocated to partner trading firms</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <p>Traders use our liquidity for their operations</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <p>We earn fixed commission and share profits</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-8 rounded-2xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">Guaranteed Returns</h4>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  2% Per Hour
                </div>
                <p className="text-purple-200">Fixed commission rate from partner firms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Firms */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Partner Trading Firms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerFirms.map((firm, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-6 rounded-xl border border-purple-400/30 text-center shadow-2xl backdrop-blur-sm">
                <img 
                  src={firm.logo} 
                  alt={firm.name} 
                  className="w-24 h-12 mx-auto mb-4 rounded-lg object-cover"
                />
                <h4 className="text-lg font-bold text-white mb-2">{firm.name}</h4>
                <div className="text-sm text-purple-200 space-y-1">
                  <p><span className="text-purple-300">Traders:</span> {firm.traders}</p>
                  <p><span className="text-purple-300">Capital:</span> {firm.capital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Reviews */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">What Our Investors Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-6 rounded-xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-semibold text-white">{review.name}</h4>
                      <div className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                        +{review.earnings}
                      </div>
                    </div>
                    <p className="text-purple-200 text-sm mb-2">{review.role}</p>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400 text-sm mr-1"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-6 rounded-xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="bg-purple-600/30 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-users text-purple-300 text-2xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">50,000+</h4>
              <p className="text-purple-200">Active Investors</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-6 rounded-xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="bg-green-600/30 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-dollar-sign text-green-300 text-2xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">$25M+</h4>
              <p className="text-purple-200">Total Paid Out</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/70 to-slate-900/90 p-6 rounded-xl border border-purple-400/30 shadow-2xl backdrop-blur-sm">
              <div className="bg-blue-600/30 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-clock text-blue-300 text-2xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">24/7</h4>
              <p className="text-purple-200">Earning System</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
