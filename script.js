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

// Calculator Logic

let previous = document.querySelector("#previous");
let current = document.querySelector("#current");
let comming = document.querySelector("#comming");

let values = document.querySelectorAll(".values");
values.forEach((value) => {
  value.addEventListener("click", () => {
    if (value.classList.contains("operator")) {
      let check = value.getAttribute("id");
      operator(check);
    } else if (value.classList.contains("enter")) {
      previous.innerText = current.innerText;
      current.innerText = comming.innerText;
    } else {
      current.innerText += value.innerText;
    }

    try {
      let result = eval(current.innerText);
      comming.innerText = result;
    } catch (error) {
      comming.innerText = "Error";
      comming.innerText = 0;
    }
  });
});

values.forEach((value) => {
  value.addEventListener("mousedown", () => {
    value.style.opacity = 0.6;
  });
  value.addEventListener("mouseup", () => {
    value.style.opacity = 1;
  });
});

const operator = (check) => {
  switch (check) {
    case "clear":
      current.innerText = "0";
      break;
    case "delete":
      current.innerText = current.innerText.slice(
        0,
        current.innerText.length - 1
      );
      if (current.innerText.length === 0) {
        current.innerText = 0;
      }
      break;
    case "percent":
      current.innerText += "%";
      break;
    case "divide":
      current.innerText += "/";
      break;
    case "multiply":
      current.innerText += "*";
      break;
    case "minus":
      current.innerText += "-";
      break;
    case "plus":
      current.innerText += "+";
      break;
  }
};
