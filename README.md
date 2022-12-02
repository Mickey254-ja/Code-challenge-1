# Code-challenge-1
##Description
The main aim of ths project is to create a proram that:
  1.Generates grades
  2.Detects speed
  3.Calculates net salary


###Project setup.
1.Grade generator
made a grade generator depending on the students marks.
Used the if and the if else statement to determine the grades that the students got.
   a)if marks are  <= 100 && marks >79,student gets a "A"
   b)if marks <= 79 && marks >=60, students gets a "B"
   c)if marks <=59 && marks >= 50,student gets a "C"
   d)if marks <=49 && marks >=40,student gets a "D"
   e)ifmarks <40 &&marks >= 0,student gets an "E"
   f)Otherwise the student gets invalid 


2.Speed detector.
Used to detect overspeeding drivers.
Used the if and if else statements.
  *if speed is < 70 return "OK"
  *Else if speed is above 70 for every 5km/s give 1 demerit point.
  *If the driver gets more than 12 points,function to print "license suspended"

3.Salary calculator
Calculates and displays deductables and hence the net salary for an employee.
Gross salary = all_benefits + basic salary e.g house_allowance + hardship_allowance + risk_allowance + basic_salary
taxable income  = Gross pay
Deductions = (payee + NHIF + NSSF)
Earnable pay = Gross pay - deductions e.g Gross salary - (payee + NHIF + NSSF)

Used the if and if else statements to calculate the tax and the deductables.


