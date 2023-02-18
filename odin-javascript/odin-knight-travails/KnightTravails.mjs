import Cell from './Cell.mjs';

const isMoveValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

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

    return moveOffsets.reduce((moves, [offsetX, offsetY]) => {
      const move = [originCell.x + offsetX, originCell.y + offsetY];

      if (isMoveValid(move)) {
        const cell = new Cell(move, originCell);
        moves.push(cell);
      }
      
      return moves;
    }, []);
  };

  const travails = (start, end) => {
    const Q = [start];

    while (Q.length) {
      const curPos = Q.shift();
      const moves = generateMoves(curPos);

      for (const move of moves) {
        if (move[0] === end[0] && move[1] === end[1]) {
          return true;
        } else {
          Q.push(move);
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