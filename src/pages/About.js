import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: '10+ years in cryptocurrency and blockchain technology'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      description: 'Former blockchain engineer at major tech companies'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Trading',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      description: 'Expert trader with 15+ years in financial markets'
    },
    {
      name: 'Emily Davis',
      role: 'Security Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Cybersecurity specialist ensuring platform safety'
    }
  ];

  const milestones = [
    { year: '2020', event: 'CryptoWealth Founded', description: 'Started with a vision to democratize crypto investing' },
    { year: '2021', event: 'Platform Launch', description: 'Launched our first investment platform' },
    { year: '2022', event: '10K Users', description: 'Reached 10,000 active investors' },
    { year: '2023', event: '$2M+ Invested', description: 'Surpassed $2 million in total investments' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CryptoWealth</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to make cryptocurrency investing accessible, profitable, and secure for everyone. 
            Join thousands of investors who trust us with their crypto journey.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At CryptoWealth, we believe that everyone should have access to profitable cryptocurrency 
                investment opportunities. Our platform provides secure, transparent, and consistent returns 
                through our proven investment strategies.
              </p>
              <p className="text-gray-600 mb-6">
                We combine cutting-edge technology with expert market analysis to deliver 2% daily returns 
                to our investors while maintaining the highest standards of security and transparency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">12,548</div>
                  <div className="text-gray-600">Happy Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$2.4M+</div>
                  <div className="text-gray-600">Total Invested</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop" 
                alt="Cryptocurrency trading" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our experienced team combines expertise in cryptocurrency, technology, and finance to deliver 
            exceptional results for our investors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CryptoWealth?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-shield-alt text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secure & Transparent</h3>
              <p className="text-gray-600">
                Enterprise-grade security with full transparency. Your investments are protected by industry-leading security measures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Consistent Returns</h3>
              <p className="text-gray-600">
                Our proven strategies deliver consistent 2% daily returns, helping you grow your wealth steadily.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-headset text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied investors who are already earning 2% daily returns with CryptoWealth.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition">
            Start Investing Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
