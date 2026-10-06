// Lets visitors drag through Big Shoulders' weight and optical size axes.
const word = document.querySelector(".axis-word");
const weight = document.querySelector("#weightAxis");
const opticalSize = document.querySelector("#opszAxis");
const weightValue = document.querySelector("#weightValue");
const opszValue = document.querySelector("#opszValue");

function updateAxes() {
  word.style.fontVariationSettings =
    `"wght" ${weight.value}, "opsz" ${opticalSize.value}`;
  weightValue.textContent = weight.value;
  opszValue.textContent = opticalSize.value;
}

weight.addEventListener("input", updateAxes);
opticalSize.addEventListener("input", updateAxes);
updateAxes();
