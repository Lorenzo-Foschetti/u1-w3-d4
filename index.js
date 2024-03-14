const createTombola = () => {
  const bingo = document.getElementById("bingo");
  for (i = 0; i < 76; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cellDiv";

    const cellNum = document.createElement("h4");
    cellNum.className = "cellNum";
    cellNum.innerText = i + 1;

    bingo.appendChild(cellDiv);
    cellDiv.appendChild(cellNum);
  }
};
