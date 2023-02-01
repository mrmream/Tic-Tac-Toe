const cells = document.querySelectorAll('.cell');
let xIsNext = true;

for (const cell of cells) {
  cell.addEventListener('click', handleClick);
}

function handleClick(e) {
  const cell = e.target;
  const cellText = cell.textContent;

  if (cellText === '') {
    cell.textContent = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
  }
}
