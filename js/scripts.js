var Calculator = function() {
  var date = parseInt(
    document.getElementById("Form").elements.namedItem("date").value
  );
  var month = parseInt(
    document.getElementById("Form").elements.namedItem("month").value
  );
  var year = parseInt(
    document.getElementById("Form").elements.namedItem("year").value
  );
  var gender = document.getElementById("Form").elements.namedItem("gender")
    .value;
  var dateOfBirth = new Date(year + "/" + month + "/" + date);
  var weekDay = dateOfBirth.getDay();


  if (month < 1 || month > 12 || (month == 2 && date > 29)) {
    return (document.getElementById("alert2").innerHTML =
      "Month is invalid! Input Correctly!");
  } else if (date < 1 || date > 31) {
    return (document.getElementById("alert2").innerHTML =
      "Day is invalid! Input Correctly!");
  } else if (year === NaN || year < 1900 || year > 2021) {
    document.getElementById("alert2").innerHTML =
      "Year is invalid! Input Correctly!";
  }

  var akanMale = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  if (weekDay === 0 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 1 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 2 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 3 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 4 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 5 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 6 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanMale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  }

  if (weekDay === 0 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 1 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 2 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 3 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 4 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 5 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  } else if (weekDay === 6 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "And The Name Is... " +
      akanFemale[weekDay] +
      ("  .Your Life Started On A: " + daysOfTheWeek[weekDay]));
  }
}
