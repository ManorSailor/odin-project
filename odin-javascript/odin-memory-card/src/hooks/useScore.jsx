/* eslint-disable no-shadow */
import { useState } from "react";

const initialState = () => ({
  best: 0,
  current: 0,
});

function useScore() {
  const [score, setScore] = useState(() => initialState());

  const increment = () =>
    setScore((score) => {
      const newScore = score.current + 1;
      const newBest = newScore > score.best ? newScore : score.best;

      return {
        best: newBest,
        current: newScore,
      };
    });

  const reset = () =>
    setScore((score) => ({
      ...initialState(),
      best: score.best,
    }));

  return [score, increment, reset];
}

export default useScore;
