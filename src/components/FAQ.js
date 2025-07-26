import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the 2% daily return work?',
      answer: 'Our platform generates returns through crypto trading and mining operations. You earn 2% of your invested capital daily, which compounds over time. For example, a $100 investment would generate $2 per day.'
    },
    {
      question: 'When can I withdraw my earnings?',
      answer: 'You can withdraw your earnings at any time after they are credited to your account. Withdrawal requests are processed within 24 hours on business days.'
    },
    {
      question: 'What cryptocurrencies do you accept?',
      answer: 'We currently accept Bitcoin (BTC), Ethereum (ETH), USDT (TRC20 & ERC20), and Litecoin (LTC) for deposits and withdrawals.'
    },
    {
      question: 'Is there a minimum investment amount?',
      answer: 'Yes, our minimum investment is $12 for the Starter Plan. We also offer $32 and $59 plans with additional benefits.'
    },
    {
      question: 'How secure is my investment?',
      answer: 'We use enterprise-grade security measures including cold storage for funds, two-factor authentication, and regular security audits to protect your investments.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Find answers to common questions about our investment platform.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left font-medium text-purple-800"
              >
                <span>{faq.question}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>
              {openIndex === index && (
                <div className="pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
