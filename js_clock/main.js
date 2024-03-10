function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  var h = String(h).padStart(2, "0");
  var m = String(m).padStart(2, "0");
  var s = String(s).padStart(2, "0");

  var time = `${h}:${m}:${s} ${session}`;
  var clockDisplay = document.getElementById("MyClockDisplay");
  clockDisplay.innerText = time;
  clockDisplay.textContent = time;

  setTimeout(showTime, 1000);
}

window.onload = showTime;
