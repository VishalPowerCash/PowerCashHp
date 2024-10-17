import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoanCalculator.css'; // Link to your existing calculator CSS file
import { calculateEMI, calculateTotalPayable } from '../../utils/loanCalculations'; // Assuming the utility functions are in utils.js

const LoanCalculatorMobileMockup = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [tenure, setTenure] = useState(12);
  const [interestRate, setInterestRate] = useState(9.75);
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Control for popup
  const [popupVisible, setPopupVisible] = useState(false); // For animation

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleTenureChange = (e) => {
    setTenure(e.target.value);
  };

  const handleCalculateClick = () => {
    if ((parseFloat(loanAmount) > 0) && (parseFloat(interestRate) > 0) && (parseFloat(tenure) > 0)) {
      const calculatedEmi = calculateEMI(loanAmount, interestRate, tenure);
      setEmi(calculatedEmi);
      setTotalPayable(calculateTotalPayable(calculatedEmi, tenure));
      setShowResults(true);

      // Show popup after 2 seconds with animation
      setTimeout(() => {
        setShowPopup(true);
        setPopupVisible(true); // Trigger the CSS animation
      }, 2000);
    }
  };

  const handleBackClick = () => {
    setShowResults(false);
    setPopupVisible(false); // Hide animation immediately
    setTimeout(() => {
      setShowPopup(false); // Hide popup after animation finishes
    }, 500); // Match this with the CSS animation duration
  };

  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };

  return (
    <div className="mobile-screen my-4 mx-auto">
      <div className="calculator-on-mobile">
        {!showResults ? (
          <div className="calculator-content">
            <h6 className='text-black border-bottom pb-2 ' style={{ marginTop: "30px" }}>Calculate EMI</h6>
            <div className="loan-calculator-form-group mt-4">
              <label >Loan Amount</label>
              <div className="input-group mb-3">
                <input type="number"
                  value={loanAmount}
                  onChange={handleLoanAmountChange} className="form-control" placeholder="Enter Amount" aria-describedby="basic-addon1" />
                <span className="input-group-text" id="basic-addon1">&#8377;</span>

              </div>

            </div>

            <div className="loan-calculator-form-group">
              <label>Interest Rate (%)</label>

              <div className="input-group mb-3">

                <input type="number"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="form-control" placeholder="Enter Rate" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">%</span>
              </div>

            </div>

            <div className="loan-calculator-form-group">
              <label>Tenure (months)</label>
              <div className="input-group mb-3">
                <input type="number"
                  value={tenure}
                  onChange={handleTenureChange}
                  className="form-control" placeholder="Enter Tenure" aria-describedby="basic-addon3" />
                <span className="input-group-text" id="basic-addon3">mt</span>
              </div>
            </div>

            <button className=" btn btn-light w-75 rounded-3 p-0 border-1 text-black" style={{ fontSize: "1rem", fontWeight: "500" }} onClick={handleCalculateClick}>
              Calculate
            </button>
          </div>
        ) : (
          <div className="calculator-results mt-4 text-black">
            <div className='d-flex justify-content-between border-bottom mb-4'>
              <button className="btn btn-light p-0 m-0 ms-1 " style={{ height: "25px", fontSize: "1rem", fontWeight: "500", width: "25px" }} onClick={handleBackClick}>
                <img src="calculator/back.png" alt="" />
              </button>
              <h6 className='' style={{ marginRight: "63px", marginTop: "6px" }}>Calculated EMI</h6>
            </div>
            <h6>Your EMI is ₹{emi.toFixed(2)}/month</h6>
            <h6 className='mb-3'>Total Payable: ₹{totalPayable.toFixed(2)}</h6>



            {/* Popup section */}
            {showPopup && (
              <div className={`popup-container position-relative ${popupVisible ? 'show' : ''}`}>

                <span className="close-btn " onClick={closePopup}><i class="bi bi-x text-white"></i></span>
                <button className=" rounded-3 p-1 bg-primary text-white position-absolute  w-50" style={{ bottom: "20px" }}>Explore Now!</button>

              </div>
            )}
          </div>
        )}
      </div>
    </div >
  );
};

export default LoanCalculatorMobileMockup;