// add the current day and have it displayed at the top of the calendar
function setDate() {
    moment().format("LLLL");
    var currentDate = moment().format("LLLL");
    var currentDayEl = $("#currentDay");
    currentDayEl.text(currentDate);
}
function init() {
    setInterval(setDate, 60000)
    colorCode()
}
// color code the time blocks to indicate whether its in the past, present or future
function colorCode() {
    var textAreaEl = $(".description");
    var currentHour = moment().format("H");
    console.log(typeof currentHour);
    textAreaEl.each(function () {
        if (parseInt($(this).attr("id")) < currentHour)  $(this).addClass("past");
        if (parseInt($(this).attr("id")) == currentHour) $(this).addClass("present");
        if (parseInt($(this).attr("id")) > currentHour)  $(this).addClass("future");
    });
}

// create function for a save button and have it save in local storage
 $(".saveBtn").on("click",function(){
    var text = $(this).siblings("textarea").val();
    var id =  $(this).siblings("textarea").attr("id");
    localStorage.setItem(id,text);

 })
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));

init();