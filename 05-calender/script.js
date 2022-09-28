//  create time obj for current time for when the page loads 
 var timeblock= $(".time-block");
 var savebtn =$(".saveBtn");



 var today= moment();
 $('#current').text(today.format("MMM Do YY")); 

// grab the current hour from the moment

function localStorageFunctions() {
  $("#8 textarea").val(localStorage.getItem("8"))
}

savebtn.on("click", function (event) { 
event.preventDefault();
console.log(event)
var inputEl = $(savebtn).siblings("textarea").val()
var parentEl = $(savebtn).parent().attr("id")
console.log(inputEl)
(localStorage.setItem(parentEl,inputEl))
}
);

    var currentTime = moment().hours()
    $(timeblock).each(function (){
    var hour = $(this).attr("id")
    console.log(hour)
    if (hour < currentTime ) {
      $(this).addClass ("past");}
// esle if for present
        else if ( currentTime === hour){
          $(this).removeClass("past");
          $(this).addClass ("present");
// else for future
      } 
      else  {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }

    });
    localStorageFunctions();