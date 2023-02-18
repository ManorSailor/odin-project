// In chess, each cell has some coordinate (x, y) & each cell has some other cell object as its origin
// In other words, if a piece moves to a new cell, it must have moved from some other cell. That other cell is the origin of the new cell
// Rant: Personally, I find it that Cell is keeping track of more than it should. Why does a cell need to know about its parent?
// I need this originCell because I want to make a trail from the target cell to the start cell. I don't know where else should this property be included.
class Cell {
  #x;
  #y;
  #originCell;

  constructor([x = 0, y = 0], originCell = null) {
    this.#x = x;
    this.#y = y;
    this.#originCell = originCell;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get originCell() {
    return this.#originCell;
  }

  get coordinates() {
    return [this.#x, this.#y];
  }

  isEqualCell(cell) {
    return this.#x === cell.x && this.#y === cell.y;
  }
}

export default Cell;
