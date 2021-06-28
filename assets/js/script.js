// Display date and time
var todaysDate = moment().format("LLLL");
console.log(todaysDate);
$("#currentDate").html(todaysDate);

// Save Button Function
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".textbox").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  // Time tracker
  
  function timeTracker() {
    var timeNow = moment().hour();
    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      var blockTime = parseInt(timeId.slice(4));
      if (timeNow > blockTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Get item from local storage

  $("#hour9 .textbox").val(localStorage.getItem("hour9"));
  $("#hour10 .textbox").val(localStorage.getItem("hour10"));
  $("#hour11 .textbox").val(localStorage.getItem("hour11"));
  $("#hour12 .textbox").val(localStorage.getItem("hour12"));
  $("#hour1 .textbox").val(localStorage.getItem("hour1"));
  $("#hour3 .textbox").val(localStorage.getItem("hour2"));
  $("#hour3 .textbox").val(localStorage.getItem("hour3"));
  $("#hour4 .textbox").val(localStorage.getItem("hour4"));
  $("#hour5 .textbox").val(localStorage.getItem("hour5"));

  timeTracker();
});
