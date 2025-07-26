import { useState, useCallback } from 'react';
import { calculateReturns } from '../utils/helpers';

export const useInvestmentCalculator = () => {
  const [amount, setAmount] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState(null);

  const calculate = useCallback(() => {
    const investmentAmount = parseFloat(amount) || 0;
    const investmentDays = parseInt(days) || 0;
    
    if (investmentAmount > 0 && investmentDays > 0) {
      const returns = calculateReturns(investmentAmount, investmentDays);
      setResult({
        daily: returns.daily.toFixed(2),
        total: returns.total.toFixed(2),
        finalAmount: returns.finalAmount.toFixed(2)
      });
      return true;
    } else {
      setResult(null);
      return false;
    }
  }, [amount, days]);

  const reset = useCallback(() => {
    setAmount('');
    setDays('');
    setResult(null);
  }, []);

  return {
    amount,
    setAmount,
    days,
    setDays,
    result,
    calculate,
    reset
  };
};
