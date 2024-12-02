document.getElementById('currentTime').textContent = '...';

setInterval(function() {
  var currentDate = new Date();
  
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDay() + 1;
  
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  
  var currentTime = hours + ":" + minutes + ":" + seconds
  var currentDay = day + "/" + month + "/" + year
  document.getElementById('currentTime').textContent = currentDay + " : " + currentTime;
}, 1000)
