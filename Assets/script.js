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

function fillTimeTable() {

  for (var hour = 0; hour < totalHours; hour++) { 
      var actHour = hour + 8;
      timeTable = hourBeginning.add(1,'h').format('HH:mm A');
      if (currentHrs == actHour) {
          currentTime = 'present';
      } else if (currentHrs < actHour) {
          currentTime = 'past';
      } else {
          currentTime= 'future';
      }

      var appendedText = 
      `<div id="hour-${actHour}" class="row time-block ${currentTime}">
          <div class="col-md-1 hour">${timeTable}</div>
          <textarea class="col-md-10 description ${actHour}"></textarea>
          <button class="btn saveBtn col-md-1">
              <i class="fas fa-save"></i>
          </button>
      </div>`;

  $(".container").append(appendedText);

}

loadSchedule();
}
