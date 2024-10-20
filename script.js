const crosswordData = [
    { answer: "APEL", position: [0, 0], direction: "across", clue: "Buah berwarna merah" },
    { answer: "PISANG", position: [2, 0], direction: "across", clue: "Buah berwarna kuning" },
    { answer: "KUNING", position: [0, 2], direction: "down", clue: "Warna matahari" },
];

const gridSize = 7; // Ukuran grid (misalnya 7x7)
const crosswordGrid = document.getElementById('crossword-grid');
const clueList = document.getElementById('clue-list');

// Generate empty grid
for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('td');
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
    }
    crosswordGrid.appendChild(row);
}

// Populate grid with answers and display clues
crosswordData.forEach(({ answer, position, direction, clue }) => {
    const [row, col] = position;
    const clueItem = document.createElement('li');
    clueItem.textContent = clue;
    clueList.appendChild(clueItem);

    for (let i = 0; i < answer.length; i++) {
        const cell = crosswordGrid.querySelector(`[data-row="${row}"][data-col="${col + (direction === 'across' ? i : 0)}"]`);
        if (cell) {
            cell.textContent = answer[i];
            cell.classList.add('filled');
        }
    }
});
