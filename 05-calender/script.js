//  create time obj for current time for when the page loads 
 var timeblock= document.getElementsByClassName("time-block");
 var savebtn =document.getElementsByClassName("savebtn");


 var today= moment();
 $('#current').text(today.format("MMM Do YY")); 

// grab the current hour from the moment

function localStorageFunctions() {
for (let index = 0; index < numbers.length; index++) {
  $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
}
}
$("savebtn").on("click", function (event) { 
event.preventDefault();
for (let index = 0; index < numbers.length; index++) {
  localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
}
});

    var currentTime = moment().hours()
    for (let i = 0; i = timeblock.length; i++){
    var hour = timeblock[i].id
    console.log(this)
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



    