import React, { useState } from 'react';

const WithdrawModal = ({ isOpen, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [step, setStep] = useState(1);

  const cryptoMethods = [
    {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      network: 'Bitcoin Network',
      minWithdraw: 0.001,
      maxWithdraw: 10,
      fee: 0.0005,
      icon: 'bitcoin',
      processingTime: '30-60 minutes'
    },
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      network: 'ERC-20',
      minWithdraw: 0.01,
      maxWithdraw: 100,
      fee: 0.005,
      icon: 'ethereum',
      processingTime: '10-30 minutes'
    },
    {
      id: 'usdt_trc',
      name: 'Tether USDT',
      symbol: 'USDT',
      network: 'TRC-20 (Tron)',
      minWithdraw: 10,
      maxWithdraw: 10000,
      fee: 1,
      icon: 'dollar-sign',
      processingTime: '5-15 minutes'
    },
    {
      id: 'usdt_erc',
      name: 'Tether USDT',
      symbol: 'USDT',
      network: 'ERC-20 (Ethereum)',
      minWithdraw: 10,
      maxWithdraw: 10000,
      fee: 5,
      icon: 'dollar-sign',
      processingTime: '10-30 minutes'
    },
    {
      id: 'bnb',
      name: 'BNB',
      symbol: 'BNB',
      network: 'BSC (BEP-20)',
      minWithdraw: 0.01,
      maxWithdraw: 100,
      fee: 0.001,
      icon: 'coins',
      processingTime: '5-15 minutes'
    },
    {
      id: 'trx',
      name: 'Tron',
      symbol: 'TRX',
      network: 'TRC-20',
      minWithdraw: 100,
      maxWithdraw: 50000,
      fee: 10,
      icon: 'coins',
      processingTime: '5-15 minutes'
    }
  ];

  const selectedCrypto = cryptoMethods.find(method => method.id === selectedMethod);
  const availableBalance = 1245.89; // This should come from user context

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    setStep(2);
  };

  const validateAddress = (addr) => {
    if (!selectedCrypto) return false;
    
    // Basic validation patterns for different cryptocurrencies
    const patterns = {
      btc: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/,
      eth: /^0x[a-fA-F0-9]{40}$/,
      usdt_erc: /^0x[a-fA-F0-9]{40}$/,
      usdt_trc: /^T[A-Za-z1-9]{33}$/,
      bnb: /^(bnb1|0x)[a-zA-Z0-9]{38,42}$/,
      trx: /^T[A-Za-z1-9]{33}$/
    };
    
    return patterns[selectedCrypto.id]?.test(addr) || false;
  };

  const handleWithdrawSubmit = () => {
    if (!validateAddress(address)) {
      alert('Invalid wallet address format');
      return;
    }
    
    if (parseFloat(amount) < selectedCrypto.minWithdraw) {
      alert(`Minimum withdrawal is ${selectedCrypto.minWithdraw} ${selectedCrypto.symbol}`);
      return;
    }
    
    if (parseFloat(amount) > availableBalance) {
      alert('Insufficient balance');
      return;
    }
    
    setStep(3);
  };

  const confirmWithdrawal = () => {
    // Here you would make an API call to process the withdrawal
    alert('Withdrawal request submitted successfully!');
    resetModal();
    onClose();
  };

  const resetModal = () => {
    setStep(1);
    setSelectedMethod('');
    setAmount('');
    setAddress('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const receivedAmount = amount ? (parseFloat(amount) - selectedCrypto?.fee || 0).toFixed(6) : '0';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900/20 rounded-xl p-6 w-full max-w-md border border-purple-900/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Withdraw Crypto</h3>
          <button onClick={handleClose} className="text-purple-300 hover:text-white">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30 mb-4">
              <p className="text-sm text-purple-300">Available Balance</p>
              <p className="text-xl font-bold text-white">${availableBalance.toFixed(2)}</p>
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Select Withdrawal Method</h4>
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
                      <p className="text-xs text-purple-300">Fee: {method.fee}</p>
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
              <h4 className="text-lg font-semibold text-white">Withdraw {selectedCrypto.symbol}</h4>
            </div>
            
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-purple-300">Network</p>
                  <p className="text-white">{selectedCrypto.network}</p>
                </div>
                <div>
                  <p className="text-purple-300">Processing Time</p>
                  <p className="text-white">{selectedCrypto.processingTime}</p>
                </div>
                <div>
                  <p className="text-purple-300">Minimum</p>
                  <p className="text-white">{selectedCrypto.minWithdraw} {selectedCrypto.symbol}</p>
                </div>
                <div>
                  <p className="text-purple-300">Network Fee</p>
                  <p className="text-white">{selectedCrypto.fee} {selectedCrypto.symbol}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-purple-300">
                Wallet Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 bg-slate-800 border border-purple-900/50 rounded-lg text-white focus:border-purple-600 focus:outline-none"
                placeholder={`Enter your ${selectedCrypto.symbol} wallet address`}
              />
              {address && !validateAddress(address) && (
                <p className="text-red-400 text-xs">Invalid address format</p>
              )}
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
                placeholder={`Min ${selectedCrypto.minWithdraw} ${selectedCrypto.symbol}`}
                step="0.000001"
                min={selectedCrypto.minWithdraw}
                max={selectedCrypto.maxWithdraw}
              />
              <div className="flex justify-between text-xs text-purple-400">
                <span>Available: {availableBalance.toFixed(2)} USD</span>
                <button 
                  onClick={() => setAmount((availableBalance / (selectedCrypto.id === 'btc' ? 50000 : selectedCrypto.id.includes('usdt') ? 1 : 2000)).toFixed(6))}
                  className="text-purple-400 hover:text-white"
                >
                  Max
                </button>
              </div>
            </div>

            {amount && parseFloat(amount) >= selectedCrypto.minWithdraw && (
              <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-900/30">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">You will receive</span>
                  <span className="text-white font-medium">{receivedAmount} {selectedCrypto.symbol}</span>
                </div>
                <div className="flex justify-between text-xs text-purple-400 mt-1">
                  <span>Network fee</span>
                  <span>-{selectedCrypto.fee} {selectedCrypto.symbol}</span>
                </div>
              </div>
            )}

            <button
              onClick={handleWithdrawSubmit}
              disabled={!address || !amount || !validateAddress(address) || parseFloat(amount) < selectedCrypto.minWithdraw}
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
              <h4 className="text-lg font-semibold text-white">Confirm Withdrawal</h4>
            </div>
            
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30 space-y-3">
              <div className="flex justify-between">
                <span className="text-purple-300">Currency</span>
                <span className="text-white">{selectedCrypto.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Network</span>
                <span className="text-white">{selectedCrypto.network}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Address</span>
                <span className="text-white text-sm">{address.slice(0, 10)}...{address.slice(-10)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Amount</span>
                <span className="text-white">{amount} {selectedCrypto.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Network Fee</span>
                <span className="text-white">-{selectedCrypto.fee} {selectedCrypto.symbol}</span>
              </div>
              <hr className="border-purple-900/50" />
              <div className="flex justify-between font-bold">
                <span className="text-purple-300">You will receive</span>
                <span className="text-white">{receivedAmount} {selectedCrypto.symbol}</span>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-900/50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <i className="fas fa-exclamation-triangle text-yellow-400 mt-1"></i>
                <div className="text-sm text-yellow-300">
                  <p className="font-medium mb-1">Important:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Double-check the wallet address</li>
                    <li>Withdrawals cannot be reversed</li>
                    <li>Processing time: {selectedCrypto.processingTime}</li>
                    <li>You will receive an email confirmation</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={confirmWithdrawal}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-medium transition-all"
            >
              Confirm Withdrawal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawModal;
