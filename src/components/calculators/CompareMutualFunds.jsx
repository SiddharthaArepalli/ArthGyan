import React, { useState } from 'react';
// import './CompareMutualFunds.css';
import '../../styling/comparemutualfunds.css'

const CompareMutualFunds = () => {
  const [funds, setFunds] = useState([{ monthlyInvestment: 0, annualReturnRate: 0, investmentDuration: 0 }]);
  const [results, setResults] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newFunds = [...funds];
    newFunds[index][field] = value;
    setFunds(newFunds);
  };

  const addFund = () => {
    setFunds([...funds, { monthlyInvestment: 0, annualReturnRate: 0, investmentDuration: 0 }]);
  };

  const removeFund = (index) => {
    const newFunds = funds.filter((_, i) => i !== index);
    setFunds(newFunds);
  };

  const calculateResults = () => {
    const newResults = funds.map(fund => {
      const { monthlyInvestment, annualReturnRate, investmentDuration } = fund;
      const monthlyRate = annualReturnRate / 12 / 100;
      const months = investmentDuration * 12;
      const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const totalInvested = monthlyInvestment * months;
      const estimatedReturn = futureValue - totalInvested;
      
      return {
        futureValue: futureValue.toFixed(2),
        totalInvested: totalInvested.toFixed(2),
        estimatedReturn: estimatedReturn.toFixed(2)
      };
    });

    setResults(newResults);
  };

  return (
    <div className="compare-mutual-funds">
      <h1>Compare Mutual Funds</h1>
      {funds.map((fund, index) => (
        <div key={index} className="fund-input">
          <div className="form-group">
            <label>Monthly Investment Amount</label>
            <input
              type="number"
              value={fund.monthlyInvestment}
              onChange={(e) => handleInputChange(index, 'monthlyInvestment', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Expected Annual Return Rate (%)</label>
            <input
              type="number"
              value={fund.annualReturnRate}
              onChange={(e) => handleInputChange(index, 'annualReturnRate', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Investment Duration (Years)</label>
            <input
              type="number"
              value={fund.investmentDuration}
              onChange={(e) => handleInputChange(index, 'investmentDuration', e.target.value)}
            />
          </div>
          <button className="remove-button" onClick={() => removeFund(index)}>Remove</button>
        </div>
      ))}
      <button className="add-button" onClick={addFund}>Add Another Fund</button>
      <button className="calculate-button" onClick={calculateResults}>Calculate</button>
      {results.length > 0 && (
        <div className="results">
          <h2>Comparison Results</h2>
          {results.map((result, index) => (
            <div key={index} className="result">
              <h3>Fund {index + 1}</h3>
              <p>Future Value: ₹{result.futureValue}</p>
              <p>Total Invested: ₹{result.totalInvested}</p>
              <p>Estimated Return: ₹{result.estimatedReturn}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompareMutualFunds;
