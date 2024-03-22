
export interface FormMortgageCalculatorData {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTermYears: number;
}

function calculateMonthlyMortgage(
  homePrice: number,
  downPayment: number,
  interestRate: number,
  loanTermYears: number
): number {
  const loanAmount = homePrice - downPayment; // Principal loan amount
  const monthlyInterestRate = interestRate / 12 / 100; // Monthly interest rate
  const numberOfPayments = loanTermYears * 12; // Total number of payments

  // Monthly mortgage payment calculation
  const monthlyPayment =
    loanAmount *
    (monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return monthlyPayment;
}

export default calculateMonthlyMortgage;
