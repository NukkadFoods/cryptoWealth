import React, { useState } from 'react';

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const faqCategories = {
    general: [
      {
        question: "How does CryptoWealth work?",
        answer: "CryptoWealth is a managed cryptocurrency investment platform that offers daily returns on your investments. Our expert team manages diversified crypto portfolios to generate consistent returns while minimizing risks."
      },
      {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment varies by plan: Starter Plan ($100), Professional Plan ($1,000), and Premium Plan ($5,000). Each plan offers different return rates and features."
      },
      {
        question: "How are returns calculated?",
        answer: "Returns are calculated daily based on your investment plan. Starter Plan offers 2% daily, Professional Plan offers 2.5% daily, and Premium Plan offers 3% daily returns."
      }
    ],
    security: [
      {
        question: "How secure is my investment?",
        answer: "We use bank-grade security measures including 256-bit SSL encryption, cold storage for crypto assets, multi-signature wallets, and regular security audits by third-party firms."
      },
      {
        question: "What happens if I forget my password?",
        answer: "You can reset your password using the 'Forgot Password' link on the login page. We'll send a secure reset link to your registered email address."
      },
      {
        question: "Do you offer two-factor authentication?",
        answer: "Yes, we strongly recommend enabling 2FA for all accounts. You can set this up in your account security settings using Google Authenticator or SMS verification."
      }
    ],
    payments: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies. We also accept bank transfers and credit/debit cards for fiat deposits."
      },
      {
        question: "How long do withdrawals take?",
        answer: "Cryptocurrency withdrawals are processed within 24 hours. Bank transfers may take 3-5 business days depending on your bank and location."
      },
      {
        question: "Are there any withdrawal fees?",
        answer: "We charge a 1% withdrawal fee plus network transaction fees. There are no fees for the first withdrawal each month for Premium Plan members."
      }
    ],
    returns: [
      {
        question: "Are the returns guaranteed?",
        answer: "While we strive to meet our target returns, cryptocurrency investments carry inherent risks. Past performance does not guarantee future results. Please read our risk disclosure carefully."
      },
      {
        question: "When are returns credited to my account?",
        answer: "Returns are calculated and credited to your account daily at 12:00 UTC. You can view your earnings in real-time on your dashboard."
      },
      {
        question: "Can I reinvest my returns?",
        answer: "Yes, you can choose to automatically reinvest your returns to compound your earnings, or withdraw them to your wallet at any time."
      }
    ]
  };

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      icon: "fa-comments",
      color: "text-blue-600"
    },
    {
      title: "Email Support",
      description: "Send us your questions and we'll respond quickly",
      availability: "Response within 4 hours",
      icon: "fa-envelope",
      color: "text-green-600"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      availability: "Mon-Fri 9AM-6PM EST",
      icon: "fa-phone",
      color: "text-purple-600"
    },
    {
      title: "Video Call",
      description: "Schedule a personalized consultation",
      availability: "By appointment",
      icon: "fa-video",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center card-hover">
              <div className={`text-4xl ${channel.color} mb-4`}>
                <i className={`fas ${channel.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{channel.title}</h3>
              <p className="text-gray-600 mb-3">{channel.description}</p>
              <p className="text-sm text-gray-500 mb-4">{channel.availability}</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Contact Now
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <i className="fas fa-exclamation-triangle text-red-600 text-2xl mr-3"></i>
            <h2 className="text-xl font-bold text-red-800">Emergency Support</h2>
          </div>
          <p className="text-red-700 mb-4">
            For urgent security issues or suspected fraud, contact our emergency hotline immediately:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+15551234567" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              <i className="fas fa-phone mr-2"></i>
              +1 (555) 123-4567
            </a>
            <a href="mailto:emergency@cryptowealth.com" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              <i className="fas fa-envelope mr-2"></i>
              emergency@cryptowealth.com
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqCategories[selectedCategory].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                autocomplete="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                autocomplete="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <select 
                autocomplete="off"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>General Question</option>
                <option>Account Issue</option>
                <option>Payment Problem</option>
                <option>Technical Support</option>
                <option>Security Concern</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Priority</label>
              <select 
                autocomplete="off"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                rows="6"
                autocomplete="off"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Please describe your question or issue in detail..."
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
