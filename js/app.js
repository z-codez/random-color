const button = document.querySelector("button");
const body = document.querySelector("body");
const hexCodeValue = document.querySelector("span");

let changeBackgroundColor = () => {
  const index = Math.floor(Math.random() *darkColorsArray.length);
  const color = darkColorsArray[index];

  body.style.backgroundColor = color;
  hexCodeValue.innerText = color;
};


button.onclick = changeBackgroundColor;

const darkColorsArray = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020"
];

