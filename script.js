const btn = document.querySelector("button");
const text = document.querySelector("p");

btn.addEventListener("click", function () {
  if (text.style.color === "blue") {
    text.style.color = "orange";
  } else {
    text.style.color = "blue";
  }
});
