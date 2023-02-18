import Cell from './Cell.mjs';

const areCoordsValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

const Knight = (() => {
  const generateMoves = (originCell) => {
    const moveOffsets = [
      [1, 2],
      [-1, -2],
      [-2, -1],
      [2, 1],
      [-1, 2],
      [1, -2],
      [-2, 1],
      [2, -1],
    ];

    return moveOffsets.reduce((cells, [offsetX, offsetY]) => {
      const cellCoords = [originCell.x + offsetX, originCell.y + offsetY];

      if (areCoordsValid(cellCoords)) {
        const cell = new Cell(cellCoords, originCell);
        cells.push(cell);
      }

      return cells;
    }, []);
  };

  const travails = (start, end) => {
    const Q = [start];

    while (Q.length) {
      const curCell = Q.shift();
      const cells = generateMoves(curCell);

      for (const cell of cells) {
        if (cell.isEqualCell(end)) {
          return true;
        } else {
          Q.push(cell);
        }
      }
    }
  };

  return { travails };
})();

function knightMoves(start = [], end = []) {
  return Knight.travails(new Cell(start), new Cell(end));
}

console.log(knightMoves([3, 3], [4, 3]));
