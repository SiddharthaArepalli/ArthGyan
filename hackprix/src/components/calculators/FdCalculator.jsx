import React, { useState } from 'react';
import '../../styling/Fd.css';

const FdCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [years, setYears] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [interestEarned, setInterestEarned] = useState(null);

  const handleCalculate = () => {
    const maturityAmount = principal * Math.pow(1 + annualInterestRate / 100, years);
    const interestEarned = maturityAmount - principal;

    setMaturityAmount(maturityAmount.toFixed(2));
    setInterestEarned(interestEarned.toFixed(2));
  };

  return (
    <div className="fd-calculator">
      <h1>FD Calculator</h1>
      <div className="form-group">
        <label>Principal Amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Duration (Years)</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {maturityAmount && (
        <div className="result">
          <h2>Maturity Amount: ₹{maturityAmount}</h2>
          <h2>Interest Earned: ₹{interestEarned}</h2>
        </div>
      )}
    </div>
  );
};

export default FdCalculator;
