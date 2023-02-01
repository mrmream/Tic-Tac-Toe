const cells = document.querySelectorAll('.cell');
const turnDisplay = document.querySelector('.turn-display p');
let xIsNext = true;

for (const cell of cells) {
  cell.addEventListener('click', handleClick);
}

function handleClick(e) {
  const cell = e.target;
  const cellValue = cell.getAttribute('data-value');

  if (!cellValue) {
    const value = xIsNext ? 'X' : 'O';
    cell.setAttribute('data-value', value);
    xIsNext = !xIsNext;
    turnDisplay.textContent = `It's ${xIsNext ? 'X' : 'O'}'s turn`;
    checkForWinner();
  }
}

function checkForWinner() {
  const values = [];
  for (const cell of cells) {
    values.push(cell.getAttribute('data-value'));
  }

  const winningCombinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      turnDisplay.textContent = `${values[a]} wins!`;
      for (const cell of cells) {
        cell.removeEventListener('click', handleClick);
      }
      const winningCells = [cells[a], cells[b], cells[c]];
      for (const winningCell of winningCells) {
        winningCell.classList.add('winning-cell');
      }
      return;
    }
  }

  if (values.every(Boolean)) {
    turnDisplay.textContent = "It's a draw!";
  }
}
