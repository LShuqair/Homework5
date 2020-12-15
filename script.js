console.log("test");
$("#currentDay").text(new Date());


var T9Am=$("#T9");
var T10Am=$("#T10A");
var T11Am=$("#T11");
var T12Pm=$("#T12");
var T1Pm=$("#T13");
var T2Pm=$("#T14");
var T3Pm=$("#T15");
var T4Pm=$("#T16");
var T5Pm=$("#T17");



$("button").on("click", function(){
localStorage.setItem("9AM", document.querySelector("#T9").value)
localStorage.setItem("10AM", document.querySelector("#T10").value)
localStorage.setItem("11AM", document.querySelector("#T11").value)
localStorage.setItem("12PM", document.querySelector("#T12").value)

localStorage.setItem("1PM", document.querySelector("#T13").value)

localStorage.setItem("2PM", document.querySelector("#T14").value)

localStorage.setItem("3PM", document.querySelector("#T15").value)
localStorage.setItem("4PM", document.querySelector("#T16").value)

localStorage.setItem("5PM", document.querySelector("#T17").value)

});

function restoreFromLocalStorage(){
    document.querySelector('#T9').value = localStorage.getItem("9AM")
    document.querySelector('#T10').value = localStorage.getItem("10AM")
    document.querySelector('#T11').value = localStorage.getItem("11AM")
    document.querySelector('#T12').value = localStorage.getItem("12PM")
    document.querySelector('#T13').value = localStorage.getItem("1PM")
    document.querySelector('#T14').value = localStorage.getItem("2PM")
    document.querySelector('#T15').value = localStorage.getItem("3PM")
    document.querySelector('#T16').value = localStorage.getItem("4PM")
    document.querySelector('#T17').value = localStorage.getItem("5PM")
  
  }
  // Following function will change color of the text input as per past, present and future.
  
  function pastPresentFuture() {
   //assigning value for current time
      var nowTime = new Date().getHours()
  //adding for loop to find current time and add the past future and present class.
  
    for(var i=9; i<=17; i++){
      if (nowTime > i) {
          $("#T"+i).addClass("past")
      }
      else if (nowTime === i) {
          $("#T"+i).addClass("present");
      }
      else {
          $("#T"+i).addClass("future");
      }
    }
  
  };
  // Here calling restoreFormLocal Storage function and pastPresentFuture function.
  restoreFromLocalStorage();
  pastPresentFuture();





