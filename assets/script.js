const textElement = ["Dicoding", "Please Review", "My Website"];
const buttonAdd = document.querySelector(".button-laptop-add");
let count = 0;
let indexArray = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === textElement.length) {
    count = 0;
  }
  currentText = textElement[count];
  letter = currentText.slice(0, ++indexArray);

  document.querySelector(".text-type").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    indexArray = 0;
  }
  setTimeout(type, 350);
})();

buttonAdd.addEventListener("click", function (event) {
  alert("Adding to Cart !");
});
