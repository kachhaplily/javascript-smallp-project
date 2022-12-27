var clockText = document.querySelector('.clock h1');

setInterval(() => {
  var now = new Date();
  var hoursToMidnight = 24-now.getHours();
  var minutes = 59 - now.getMinutes();
  var seconds = 59 - now.getSeconds();
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  clockText.textContent = `${hoursToMidnight}:${minutes}:${seconds}`;
}, 1000)

