document.getElementById('currentTime').textContent = '...';

setInterval(function() {
  var currentDate = new Date();
  
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate() + 1;
  
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  
  var currentTime = hours + ":" + minutes + ":" + seconds
  var currentDay = day + "/" + month + "/" + year
  document.getElementById('currentTime').textContent = currentDay + " : " + currentTime;
}, 1)
