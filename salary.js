/*Calculates and displays deductables and hence the net salary for an employee.
Gross salary = all_benefits + basic salary e.g house_allowance + hardship_allowance + risk_allowance + basic_salary
taxable income  = Gross pay
Deductions = (payee + NHIF + NSSF)
Earnable pay = Gross pay - deductions e.g Gross salary - (payee + NHIF + NSSF)
*/
function tax(gross_pay){
  let paye;
  let extra_taxable_pay;
  let nhif;
  let nssf= 200;
  let total_deductions;
  let net_salary;
  if (gross_pay < 24001){
    paye = gross_pay * 0.1;
  } 
  else if (gross_pay < 32334){
    paye = 2400;
    extra_taxable_pay = gross_pay - 24000
    paye = (extra_taxable_pay * 0.25) + paye;
  }
  else {
    paye = 4483;
    extra_taxable_pay = gross_pay - 32333;
    paye = (extra_taxable_pay * 0.30) + paye;
  }
  if (gross_pay < 6000){
    nhif = 150;
  }
  else if (gross_pay <8000){
    nhif = 300;
  }
  else if (gross_pay < 12000){
    nhif = 400;
  }
  else if (gross_pay < 15000){
    nhif = 500;
  }
  else if (gross_pay < 20000){
    nhif = 600;
  }
  else if (gross_pay <25000){
    nhif = 700;
  }
  else if (gross_pay < 30000){
    nhif = 850;
  }
  else if (gross_pay < 35000){
    nhif = 900;
  }
  else{
    nhif = 950
  }

  total_deductions = nhif + paye + nssf;
  net_salary = gross_pay - total_deductions;
  console.log(`Your gross_pay is Ksh: ${gross_pay}\n`);
  console.log(`Your P.A.Y.E is Ksh: ${nhif}\n`);
  console.log(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
  console.log(`Your standard NSSF deduction is Ksh: ${nssf}\n`);
  console.log(`Your total deduction amount to Ksh: ${total_deductions}\n`);
  console.log(`Your Net Salary is Ksh: ${net_salary}\n`);
}
console.log(tax(7000))
