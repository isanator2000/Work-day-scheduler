// global variables
var hrsStart = moment().startOf('day').add(7,'h');
var totalHrs = 11;
var currentHrs = moment().format('H');
var timeTable;
var currentTime;

function showcurrentDay() {
  var today = moment().format("dddd, MMMM Do, HH:mm A");
  $('#currentDay').text(today);
}

function fillTimeTable() {

  for (var hour = 0; hour < totalHrs; hour++) { 
      var actHour = hour + 8;
      timeTable = hrsStart.add(1,'h').format('HH:mm A');
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
      showSchedule();
  }

          function saveSchedule() {

            var Name = $(this).parent().attr('id');
            var Value = $(this).parent().children().eq(1).val();

            localStorage.setItem(Name, Value);
          }

          function showSchedule() {

            for (var hour = 0; hour < totalHrs; hour++) {
                var actHour = hour + 8;
                var schedule = localStorage.getItem(`hour-${actHour}`);

                $(`.${actHour}`).val(schedule);
            }

          }

showcurrentDay();
fillTimeTable();
$('.saveBtn').on('click', saveSchedule);

setInterval(function() {
    showcurrentDay();
}, 60000);

setInterval(function() {
    fillTimeTable();
}, 600000);