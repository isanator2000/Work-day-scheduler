// global variables
var hrsStart = moment().startOf('day').add(7,'h');
var totalHrs = 10;
var currentHrs = moment().format('H');
var timeTable;
var currentTime;

function showcurrentDay() {
  var today = moment().format("dddd, MMMM Do, HH:mm A");
  $('#currentDay').text(today);
}

