import knightMoves from "./KnightTravails.mjs";

knightMoves([0, 0], [1, 2]);
// You made it in 1 moves! Here's your path:
// [ 0, 0 ]
// [ 1, 2 ]

knightMoves([3, 3], [4, 3]);
// You made it in 3 moves! Here's your path:
// [ 3, 3 ]
// [ 4, 5 ]
// [ 2, 4 ]
// [ 4, 3 ]

knightMoves([0, 0], [7, 7]);
// You made it in 6 moves! Here's your path:
// [ 0, 0 ]
// [ 1, 2 ]
// [ 2, 4 ]
// [ 3, 6 ]
// [ 5, 7 ]
// [ 6, 5 ]
// [ 7, 7 ]

// Now. It's time for a big brain move:
knightMoves([3, 3], [3, 3]);
// You made it in 2 moves! Here's your path:
// [ 3, 3 ]
// [ 4, 5 ]
// [ 3, 3 ]