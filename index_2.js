var weight = prompt("What is your weight ?(in KG)");
var height = prompt("What is your height ? (in cm)");

var bmi = weight / (height * height);
bmi = bmi.toFixed(1)

alert("your bmi is:" + bmi);

if (bmi < 18.5) {
  alert("you are underweight");
}
else if (bmi > 18.5, bmi < 25) {
  alert("you are in a healthy weight range");
}
else if (bmi > 25, bmi < 30) {
  alert("you are in the overweight range");
}
else if (bmi < 30) {
  alert("you are in the obesity range");
}