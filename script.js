let draggedElement = null;
let droppedElements = [];
let hasCreatedSteam = false;

document.querySelectorAll('.element').forEach(elem => {
  elem.addEventListener('dragstart', (e) => {
    draggedElement = e.target.id;
  });
});

const board = document.getElementById('board');
const results = document.getElementById('results');

board.addEventListener('dragover', (e) => {
  e.preventDefault();
});

board.addEventListener('drop', () => {
  droppedElements.push(draggedElement);

  if (droppedElements.includes("water") && droppedElements.includes("fire") && !hasCreatedSteam) {
    const steamElem = document.createElement('div');
    steamElem.textContent = "🌫️ Steam";
    steamElem.classList.add("element");
    results.appendChild(steamElem);
    board.innerHTML = "<p>🌫️ Steam Created!</p>";
    hasCreatedSteam = true;
  } else {
    board.innerHTML = `<p>Added: ${draggedElement}</p>`;
  }
});