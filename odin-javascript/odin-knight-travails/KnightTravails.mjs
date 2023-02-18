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
          return pathFrom(cell);
        } else {
          Q.push(cell);
        }
      }
    }
  };

  const pathFrom = (cell) => {
    if (!cell) return [];
    const accCells = pathFrom(cell.originCell);
    return [...accCells, cell.coordinates];
  };

  return { travails };
})();

export default function knightMoves(start = [], end = []) {
  if (!Array.isArray(start) || !Array.isArray(end))
    return 'Provide coordinates as arrays!';
  if (start.length !== 2 || end.length !== 2)
    return 'Provide X & Y values for cells!';
  if (!areCoordsValid(start) || !areCoordsValid(end))
    return 'Invalid coordinates!';

  const startCell = new Cell(start);
  const endCell = new Cell(end);
  const optimalPath = Knight.travails(startCell, endCell);

  console.log(
    `You made it in ${optimalPath.length - 1} moves! Here's your path:`
  );
  optimalPath.forEach((path) => console.log(path));

  return optimalPath;
}
