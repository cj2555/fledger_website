"use client";

import { useLocation } from "@/context/location.context";

const PayrollDetails = () => {
  const { country } = useLocation();

  const getPayrollText = () => {
    switch (country) {
      case "GB":
        return "Add employees, submit their pay and tax details to HMRC, generate payslips and more.";
      case "ZA":
        return "Add employees, submit their pay and tax details to SARS, generate payslips and more.";
      default:
        return "Add employees, manage payroll, submit tax details, generate payslips and more.";
    }
  };

  return <>{getPayrollText()}</>;
};

export default PayrollDetails; 