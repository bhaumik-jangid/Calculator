//time display
function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function updateDisplay() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());

  const timeString = `${hours}:${minutes}`;
  document.getElementById("time").textContent = timeString;
}
setInterval(updateDisplay, 1000);
updateDisplay();
