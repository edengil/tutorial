const getRandomColor = function () {
  const colors = [
    "red",
    "pink",
    "green",
    "black",
    "purple",
    "white",
    "yellow",
    "blue",
    "brown",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return niceColors[randomIndex];
};
// const newBox = document.getElementById("container").createElement("div");
// newBox.setAttribute("class", "box");
// newBox.style.backgroundColor = getRandomColor();

for (let i = 1; i < 8; i++) {
  const newBox = document.createElement("div");
  newBox.setAttribute("class", "box");
  newBox.style.backgroundColor = getRandomColor();
  newBox.onmouseenter = function () {
    const randomColor = getRandomColor();
    newBox.style.backgroundColor = randomColor;
  };
  document.getElementById("container").appendChild(newBox);
}
