export const calculateEMI = (principal, annualInterestRate, tenureInMonths) => {
    let monthlyInterestRate = (annualInterestRate / 12) / 100;

    let emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
        (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);

    return emi;
};

// Function to calculate Total Payable Amount
export const calculateTotalPayable = (emi, tenureInMonths) => {
    return emi * tenureInMonths;
};
