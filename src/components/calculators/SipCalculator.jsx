// src/components/SipCalculator.jsx

import React, { useState } from 'react';
import '../../styling/sip.css'

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [futureValue, setFutureValue] = useState(null);
  const [totalInvested, setTotalInvested] = useState(null);
  const [estimatedReturn, setEstimatedReturn] = useState(null);

  const handleCalculate = () => {
    const monthlyRate = annualReturnRate / 12 / 100;
    const months = investmentDuration * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = monthlyInvestment * months;
    const estimatedReturn = futureValue - totalInvested;

    setFutureValue(futureValue.toFixed(2));
    setTotalInvested(totalInvested.toFixed(2));
    setEstimatedReturn(estimatedReturn.toFixed(2));
  };

  return (
    <div className="sip-calculator">
      <h1>SIP Calculator</h1>
      <div className="form-group">
        <label>Monthly Investment Amount</label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Expected Annual Return Rate (%)</label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Investment Duration (Years)</label>
        <input
          type="number"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {futureValue && (
        <div className="result">
          <h2>Future Value: ₹{futureValue}</h2>
          <h2>Total Invested: ₹{totalInvested}</h2>
          <h2>Estimated Return: ₹{estimatedReturn}</h2>
        </div>
      )}
    </div>
  );
};

export default SipCalculator;
