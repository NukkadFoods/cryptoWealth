import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                CryptoWealth ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our crypto 
                investment platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Government-issued identification documents</li>
                <li>Financial information (bank account details, transaction history)</li>
                <li>Investment preferences and risk tolerance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Technical Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide and maintain our investment services</li>
                <li>Process transactions and manage your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our platform and user experience</li>
                <li>Send important updates and notifications</li>
                <li>Detect and prevent fraud or suspicious activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Service providers and business partners</li>
                <li>Regulatory authorities when required by law</li>
                <li>Legal advisors and auditors</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Multi-factor authentication</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure data centers with restricted access</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies Policy</h2>
              <p className="text-gray-600 mb-4">
                We use cookies to enhance your experience on our platform. You can control cookie 
                settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@cryptowealth.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Crypto Street, Digital City, DC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
