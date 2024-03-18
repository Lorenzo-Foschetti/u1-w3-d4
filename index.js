const createTombola = function () {
  const tabellone = document.getElementById("bingo");
  for (let i = 1; i <= 76; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.innerText = i;
    cellDiv.classList.add("cells");

    tabellone.appendChild(cellDiv);
  }
};
createTombola();
button.onclick = function () {
  const randomNumber = Math.ceil(Math.random() * 76);
  for (let i = 0; i < 77; i++) {
    if (cellDiv[i].innerText === randomNumber) {
      cellDiv[i].className = "orangeCell";
    }
  }
};
