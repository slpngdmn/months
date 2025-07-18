function calculateAge() {
  const monthsInput = document.getElementById("months").value;

  let Result = "";

  switch (monthsInput) {
    case "1":
      Result = "January";
      break;
    case "2":
      Result = "February";
      break;
    case "3":
      Result = "March";
      break;
    case "4":
      Result = "April";
      break;
    case "5":
      Result = "May";
      break;
    case "6":
      Result = "June";
      break;
    case "7":
      Result = "July";
      break;
    case "8":
      Result = "August";
      break;
    case "9":
      Result = "September";
      break;
    case "10":
      Result = "October";
      break;
    case "11":
      Result = "November";
      break;
    case "12":
      Result = "December";
      break;
    default:
      Result = "Invalid month number";
  }

  const result = `Name of the month is ${Result}`;
  document.getElementById("result").textContent = result;
}
