const isMoveValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

const Knight = (() => {
  const generateMoves = ([x, y]) => {
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
      const move = [x + offsetX, y + offsetY];
      if (isMoveValid(move)) moves.push(move);
      return moves;
    }, []);
  };

  

  return { travails };
})();

console.log(Knight.travails([3, 3], [4, 3]));
