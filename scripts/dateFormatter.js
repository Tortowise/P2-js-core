const dateParser = {
  parse: function (inputStringDate, format) {
    let day;
    let month;
    let year;
    switch (format) {
      case "DD-MM-YYYY":
        [day, month, year] = inputStringDate.split("-");
        break;
      case "MMDDYYYY":
        month = inputStringDate.slice(0, 2);
        day = inputStringDate.slice(2, 4);
        year = inputStringDate.slice(4, 8);
        break;
      case "YYYYMMDD":
        month = inputStringDate.slice(6, 8);
        day = inputStringDate.slice(4, 6);
        year = inputStringDate.slice(0, 4);
        break;
      case "DDMMYYYY":
        month = inputStringDate.slice(2, 4);
        day = inputStringDate.slice(0, 2);
        year = inputStringDate.slice(4, 8);
        break;
      case "DD MM YYYY":
        [day, month, year] = inputStringDate.split(" ");
        break;
      case "DD.MM.YYYY":
        [day, month, year] = inputStringDate.split(".");
    }
    return [day, month, year];
  },
};
const customDate = {
  formmat: function (formatData, format) {
    switch (format) {
      case "MM-DD-YYYY":
        let buf = formatData[0];
        formatData[0] = formatData[1];
        formatData[1] = buf;
        return formatData.join("-");
        break;
      case "Full month":
        formatData[1] = months[formatData[1]];
        return formatData.join(" ");
        break;
      case "MM.DD.YYYY":
        return formatData.join(".");
        break;
      case "DD-MM-YYYY":
        return formatData.join("-");
        break;
    }
  },
  fromNow: function (parsedToArrayDate) {
    let currentDate = new Date();
    return Number(currentDate.getFullYear()) - Number(parsedToArrayDate[2]);
  },
};

let months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

function getDataFromInput(selector) {
  return document.querySelector(selector).value;
}


function dateFormatter() {

  let inputStringDate = getDataFromInput("#date");
  console.log(inputStringDate);
  let inputFormat = getDataFromInput("#format_input");
  console.log(inputFormat);
  let outputFormat = getDataFromInput("#format_output");
  console.log(outputFormat);
  let date = dateParser.parse(inputStringDate,inputFormat);
  console.log(date);
  let outputDate = customDate.formmat(date, outputFormat);
  console.log(outputDate);
  let differenceInYears = customDate.fromNow(date);
  let outputBlock = document.querySelector('#date_output');
  outputBlock.innerHTML = "<p>" + outputDate + "</p>" + "<p>" +"Years from now:" + differenceInYears + "</p>"
}

document
  .querySelector("#date_display")
  .addEventListener("click", dateFormatter);

// /*Date Display Fromatter*/
//
// function getInputDate(selector) {
//     let str = document.querySelector(selector).value;
//     return str;
// }
//
// function dashDate() {
//     let date = getInputDate("#date");
//     date = date.slice(0, 2) + "-" + date.slice(2, 4) + "-" + date.slice(4, 8);
//     let output = document.querySelector("#dashDate");
//     output.innerHTML = date;
// }
//
// let months = {
//     "01": "January",
//     "02": "February",
//     "03": "March",
//     "04": "April",
//     "05": "May",
//     "06": "June",
//     "07": "July",
//     "08": "August",
//     "09": "September",
//     10: "October",
//     11: "November",
//     12: "December",
// };
//
// function fullMonth() {
//     let date = getInputDate("#date");
//
//     let day = date.slice(0, 2);
//     let month = date.slice(2, 4);
//     let year = date.slice(4, 8);
//     let outputString = day + " " + months[month] + " " + year;
//     let output = document.querySelector("#fullMonth");
//     output.innerHTML = outputString;
// }
//
// function yearmonthday() {
//     let date = getInputDate("#date");
//     let day = date.slice(6, 8);
//     let month = date.slice(4, 6);
//     let year = date.slice(0, 4);
//     let outputString = day + " " + months[month] + " " + year;
//     let output = document.querySelector("#YYYMMDD");
//     output.innerHTML = outputString;
// }
//
// function year_month_day() {
//     let date = getInputDate("#date");
//     let outputString =
//         date.slice(6, 8) + "-" + date.slice(4, 6) + "-" + date.slice(0, 4);
//     let output = document.querySelector("#YYY_MM_DD");
//     output.innerHTML = outputString;
// }
//
// function dateDiff() {
//     let date = getInputDate("#date");
//     let [year, month, day] = date.split("-");
//     let currentDate = new Date();
//     let outputString = currentDate.getFullYear() - Number(year) + " years ago";
//     let output = document.querySelector("#dateDiff");
//     output.innerHTML = outputString;
// }
