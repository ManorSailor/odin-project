const Board = (() => ({
  validMove: ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7,
}))();
