// Display today's day and date
var Date = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
var Date = moment().format('dddd, MMM Do YYYY');
$("day-time").html(Date);
$("day-time").html(Date); 
$(document).ready(function () {
   
   
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the textbox in JQuery
        var text = $(this).siblings(".textbox").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
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
}) 