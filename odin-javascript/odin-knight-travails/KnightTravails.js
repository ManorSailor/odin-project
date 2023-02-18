const isMoveValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

const Knight = (() => {
  const generateMoves = (parent) => {
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
      // coord[0] is x, coord[1] is y
      const move = [parent.coord[0] + offsetX, parent.coord[1] + offsetY];

      if (isMoveValid(move)) {
        moves.push({ parent, coord: move });
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

console.log(Knight.travails([3, 3], [4, 3]));
