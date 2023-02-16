const isMoveValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

const Knight = (() => {
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

  const generateMoves = ([x, y], end) => {
    const moves = [];

    for (const [a, b] of moveOffsets) {
      const newMove = [x + a, y + b];
      if (isMoveValid(newMove)) {
        moves.push(newMove);
      }
    }

    return moves;
  };

  return { generateMoves };
})();

console.log(Knight.generateMoves([3, 3], [6, 6]));
