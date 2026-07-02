let studentName = "Jay W. Lee";
let studentAge = 19;
let isGraduated = false;
let scores = [85,90,78];
let student = { id: "68001234", name:"Jay W. Lee", grade:"A"};
console.log("Name:", studentName, "Type:", typeof studentName)
console.log("Age", studentAge, "Type:", typeof studentAge)
document.getElementById("output").innerHTML = `
Name: ${studentName}<br>
Name: ${studentAge}<br>
Average Grade: ${(scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(2)}

`
