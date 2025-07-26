import React, { useState } from 'react';

const DepositModal = ({ isOpen, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1);

  const cryptoMethods = [
    {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      network: 'Bitcoin Network',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      minDeposit: 0.001,
      icon: 'bitcoin'
    },
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      network: 'ERC-20',
      address: '0x742d35Cc6431C4C85E5cd2e0A1a1ce5c0f8c8B85',
      minDeposit: 0.01,
      icon: 'ethereum'
    },
    {
      id: 'usdt_trc',
      name: 'Tether USDT',
      symbol: 'USDT',
      network: 'TRC-20 (Tron)',
      address: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE',
      minDeposit: 10,
      icon: 'dollar-sign'
    },
    {
      id: 'usdt_erc',
      name: 'Tether USDT',
      symbol: 'USDT',
      network: 'ERC-20 (Ethereum)',
      address: '0x742d35Cc6431C4C85E5cd2e0A1a1ce5c0f8c8B85',
      minDeposit: 10,
      icon: 'dollar-sign'
    },
    {
      id: 'bnb',
      name: 'BNB',
      symbol: 'BNB',
      network: 'BSC (BEP-20)',
      address: 'bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2',
      minDeposit: 0.01,
      icon: 'coins'
    },
    {
      id: 'trx',
      name: 'Tron',
      symbol: 'TRX',
      network: 'TRC-20',
      address: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE',
      minDeposit: 100,
      icon: 'coins'
    }
  ];

  const selectedCrypto = cryptoMethods.find(method => method.id === selectedMethod);

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    setStep(2);
  };

  const handleAmountSubmit = () => {
    if (amount >= selectedCrypto.minDeposit) {
      setStep(3);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const resetModal = () => {
    setStep(1);
    setSelectedMethod('');
    setAmount('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900/20 rounded-xl p-6 w-full max-w-md border border-purple-900/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Deposit Crypto</h3>
          <button onClick={handleClose} className="text-purple-300 hover:text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Select Payment Method</h4>
            <div className="space-y-3">
              {cryptoMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleMethodSelect(method.id)}
                  className="w-full p-4 bg-gradient-to-r from-purple-900/30 to-slate-800/30 rounded-lg border border-purple-900/50 hover:border-purple-600 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-600/20 p-2 rounded-lg">
                        <i className={`fab fa-${method.icon} text-purple-400`}></i>
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-white">{method.name}</p>
                        <p className="text-sm text-purple-300">{method.network}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">{method.symbol}</p>
                      <p className="text-xs text-purple-300">Min: {method.minDeposit}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedCrypto && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <button onClick={() => setStep(1)} className="text-purple-400 hover:text-white">
                <i className="fas fa-arrow-left"></i>
              </button>
              <h4 className="text-lg font-semibold text-white">Deposit {selectedCrypto.symbol}</h4>
            </div>
            
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30">
              <p className="text-sm text-purple-300 mb-2">Network: {selectedCrypto.network}</p>
              <p className="text-sm text-purple-300 mb-2">Minimum deposit: {selectedCrypto.minDeposit} {selectedCrypto.symbol}</p>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-purple-300">
                Amount ({selectedCrypto.symbol})
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 bg-slate-800 border border-purple-900/50 rounded-lg text-white focus:border-purple-600 focus:outline-none"
                placeholder={`Min ${selectedCrypto.minDeposit} ${selectedCrypto.symbol}`}
                step="0.000001"
                min={selectedCrypto.minDeposit}
              />
              <p className="text-xs text-purple-400">
                ≈ ${(parseFloat(amount || 0) * (selectedCrypto.id === 'btc' ? 50000 : selectedCrypto.id.includes('usdt') ? 1 : 2000)).toFixed(2)} USD
              </p>
            </div>

            <button
              onClick={handleAmountSubmit}
              disabled={!amount || parseFloat(amount) < selectedCrypto.minDeposit}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 rounded-lg font-medium transition-all disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && selectedCrypto && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <button onClick={() => setStep(2)} className="text-purple-400 hover:text-white">
                <i className="fas fa-arrow-left"></i>
              </button>
              <h4 className="text-lg font-semibold text-white">Payment Details</h4>
            </div>
            
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30 text-center">
              <p className="text-purple-300 mb-2">Send exactly</p>
              <p className="text-2xl font-bold text-white">{amount} {selectedCrypto.symbol}</p>
              <p className="text-sm text-purple-400">to the address below</p>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-purple-300">
                {selectedCrypto.network} Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={selectedCrypto.address}
                  readOnly
                  className="w-full p-3 bg-slate-800 border border-purple-900/50 rounded-lg text-white pr-12 text-sm"
                />
                <button
                  onClick={() => copyToClipboard(selectedCrypto.address)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-900/50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <i className="fas fa-exclamation-triangle text-yellow-400 mt-1"></i>
                <div className="text-sm text-yellow-300">
                  <p className="font-medium mb-1">Important Notes:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Send only {selectedCrypto.symbol} to this address</li>
                    <li>Minimum deposit: {selectedCrypto.minDeposit} {selectedCrypto.symbol}</li>
                    <li>Funds will be credited after network confirmation</li>
                    <li>Network fees apply and are deducted from deposit</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-medium transition-all"
            >
              I've Sent the Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
