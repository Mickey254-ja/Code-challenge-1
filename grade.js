//Grade student marks as input by a user
function gradeGenerator(marks){


if (marks <= 100 && marks >79){
    console.log("A")
}
else if (marks <= 79 && marks >=60){
    console.log("B")
}
else if (marks <=59 && marks >= 50){
    console.log("C")
}
else if (marks <=49 && marks >=40){
    console.log("D")
}else if (marks <40 &&marks >= 0){
    console.log("E")
}
else {
    console.log("Invalid grade")
}
}
console.log(gradeGenerator(100))



