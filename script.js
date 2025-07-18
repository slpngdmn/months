function calculate() {
  const monthsInput = document.getElementById("months").value;

  let Result = "";

  if (monthsInput === "1") {
    Result = "January";
  } else if (monthsInput === "2") {
    Result = "February";
  } else if (monthsInput === "3") {
    Result = "March";
  } else if (monthsInput === "4") {
    Result = "April";
  } else if (monthsInput === "5") {
    Result = "May";
  } else if (monthsInput === "6") {
    Result = "June";
  } else if (monthsInput === "7") {
    Result = "July";
  } else if (monthsInput === "8") {
    Result = "August";
  } else if (monthsInput === "9") {
    Result = "September";
  } else if (monthsInput === "10") {
    Result = "October";
  } else if (monthsInput === "11") {
    Result = "November";
  } else if (monthsInput === "12") {
    Result = "December";
  } else {
    Result = "Invalid month number";
  }

  const result = `Name of the month is ${Result}`;
  document.getElementById("result").textContent = result;
}
