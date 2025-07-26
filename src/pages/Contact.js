import React, { useState } from 'react';
import { isValidEmail } from '../utils/helpers';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for your message! We will get back to you within 24 hours.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@cryptowealth.com',
      available: '24/7 Response'
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available on website',
      available: '24/7 Available'
    },
    {
      icon: 'fab fa-telegram',
      title: 'Telegram',
      description: 'Join our community',
      contact: '@cryptowealth_official',
      available: 'Community Support'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone Support',
      description: 'Speak with an expert',
      contact: '+1 (555) 123-4567',
      available: 'Mon-Fri 9AM-6PM'
    }
  ];

  const faqItems = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours during weekends.'
    },
    {
      question: 'What information should I include in my message?',
      answer: 'Please include your registered email address, account details (if applicable), and a detailed description of your inquiry or issue.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes, we offer phone support for urgent matters during business hours. You can also schedule a call through our support system.'
    },
    {
      question: 'Can I get help with technical issues?',
      answer: 'Absolutely! Our technical support team can help with platform navigation, account issues, and any other technical concerns.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about your investments or need support? We're here to help you 24/7.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autocomplete="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autocomplete="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="account">Account Issues</option>
                  <option value="withdrawal">Withdrawal Support</option>
                  <option value="general">General Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Please describe your inquiry in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full gradient-bg text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Choose your preferred way to contact us. We're committed to providing excellent support 
              and will respond to your inquiry as quickly as possible.
            </p>

            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <i className={`${method.icon} text-purple-600 text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{method.title}</h3>
                      <p className="text-gray-600 mb-2">{method.description}</p>
                      <p className="text-purple-600 font-medium">{method.contact}</p>
                      <p className="text-sm text-gray-500">{method.available}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick FAQ */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick FAQ</h3>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-800 mb-2">{item.question}</h4>
                    <p className="text-sm text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Support Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-clock text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600">24/7 Available</p>
            </div>
            <div>
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-envelope text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600">Response within 2-4 hours</p>
            </div>
            <div>
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-phone text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Phone Support</h3>
              <p className="text-gray-600">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
