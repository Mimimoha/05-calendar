//  create time obj for current time for when the page loads 
 var timeblock= $(".time-block");
 var savebtn =$(".saveBtn");


 var today= moment();
 $('#current').text(today.format("MMM Do YY")); 

// grab the current hour from the moment

function localStorageFunctions() {
   localStorage.getItem
}

savebtn.on("click", function (event) { 
event.preventDefault();
console.log(event)
var inputEl = $(event.target).siblings("input")
var parentEl = $(event.target).parent()
console.log(inputEl)
JSON.stringify(localStorage.setItem())("tasks", {hour: parentEl.id, value: inputEl.val()  })
}
);

    var currentTime = moment().hours()
    for (let i = 0; i < timeblock.length; i++){
    var hour = timeblock[i].id
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

    };
    