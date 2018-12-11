document.addEventListener('DOMContentLoaded', function(){
  var startDate = new Date("Dec 12, 2018 10:00:00").getTime();

  var countdownfunction = setInterval(function() {

      var now = new Date().getTime();

      var distance = startDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var daysElem = document.getElementById("countdown-days");
      var hoursElem = document.getElementById("countdown-hrs");
      var minutesElem = document.getElementById("countdown-mins");
      var secondsElem = document.getElementById("countdown-secs");

      if (daysElem && hoursElem && minutesElem && secondsElem) {
        daysElem.innerHTML = days;
        hoursElem.innerHTML = hours;
        minutesElem.innerHTML = minutes;
        secondsElem.innerHTML = seconds;
      }

      if (distance < 0) {
        clearInterval(countdownfunction);
        daysElem.innerHTML = 0;
        hoursElem.innerHTML = 0;
        minutesElem.innerHTML = 0;
        secondsElem.innerHTML = 0;
      }
  }, 1000);

  function setBackgroundImage() {
    var images = [
      "url(/assets/images/Talisker_Whisky_Atlantic_Challenge_Status_Row_Plastic_Pollution_1.jpg)",
      "url(/assets/images/Talisker_Whisky_Atlantic_Challenge_Status_Row_Plastic_Pollution_2.jpg)",
      "url(/assets/images/Talisker_Whisky_Atlantic_Challenge_Status_Row_Plastic_Pollution_3.jpg)"
    ];

    var x = document.getElementsByClassName("Hero__Global");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundImage = images[Math.floor(Math.random() * images.length)];
    }

  }

  setBackgroundImage();

});
