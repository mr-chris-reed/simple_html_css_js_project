function addNumbers()
{
  var number1 = parseInt(document.getElementById("num1").value);
  var number2 = parseInt(document.getElementById("num2").value);
  var result = number1 + number2;
  document.getElementById("answer").value = result;
}