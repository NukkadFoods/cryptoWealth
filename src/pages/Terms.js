import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using CryptoWealth's investment platform, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any 
                of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Investment Services</h2>
              <p className="text-gray-600 mb-4">
                CryptoWealth provides cryptocurrency investment services including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Managed investment plans with daily returns</li>
                <li>Portfolio management and diversification</li>
                <li>Market analysis and investment recommendations</li>
                <li>Secure wallet services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Investment Risks</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-semibold">⚠️ Important Risk Disclosure</p>
                <p className="text-yellow-700 mt-2">
                  Cryptocurrency investments carry significant risks and may result in substantial losses. 
                  Past performance does not guarantee future results.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>High volatility of cryptocurrency markets</li>
                <li>Regulatory changes affecting crypto assets</li>
                <li>Technology risks and security vulnerabilities</li>
                <li>Liquidity risks in certain market conditions</li>
                <li>Potential total loss of invested capital</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Eligibility Requirements</h2>
              <p className="text-gray-600 mb-4">To use our services, you must:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have legal capacity to enter into binding agreements</li>
                <li>Comply with all applicable laws in your jurisdiction</li>
                <li>Complete our KYC (Know Your Customer) verification process</li>
                <li>Meet minimum investment requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Account Security</h2>
              <p className="text-gray-600 mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Using strong passwords and enabling two-factor authentication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Fees and Charges</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Current Fee Structure:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Management Fee: 2% annually</li>
                  <li>• Withdrawal Fee: 1% of withdrawal amount</li>
                  <li>• Performance Fee: 10% of profits above guaranteed returns</li>
                  <li>• Network Transaction Fees: Variable (passed through to user)</li>
                </ul>
              </div>
              <p className="text-gray-600 mb-4">
                Fees are subject to change with 30 days' prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Withdrawal Policy</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Withdrawals processed within 24-48 hours</li>
                <li>Minimum withdrawal amount: $50</li>
                <li>Identity verification required for large withdrawals</li>
                <li>Emergency withdrawal fees may apply</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">Users are prohibited from:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Money laundering or terrorist financing</li>
                <li>Market manipulation or insider trading</li>
                <li>Using our platform for illegal activities</li>
                <li>Attempting to hack or compromise our systems</li>
                <li>Creating multiple accounts without authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                CryptoWealth's liability is limited to the maximum extent permitted by law. We are not 
                liable for indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Any disputes will be resolved through binding arbitration in accordance with the rules 
                of the International Chamber of Commerce.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to terminate or suspend your account at any time for violation 
                of these terms or applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Information</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Legal Department:</strong> legal@cryptowealth.com</p>
                <p className="text-gray-700 mb-2"><strong>Support:</strong> support@cryptowealth.com</p>
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

export default Terms;
