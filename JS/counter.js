const display = document.querySelector(".counter-number");
let increamentBtn = document.querySelector("#increment");
let resetBtn = document.querySelector("#reset");

increamentBtn.addEventListener("click", incrementf);
resetBtn.addEventListener("click", reset);

let value = 0;

function incrementf() {
  value = value + 1;
  display.textContent = value;
}
function reset() {
  value = 0;
  display.textContent = value;
}
