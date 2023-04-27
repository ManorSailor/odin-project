import { useState, useCallback } from 'react';

function useArray() {
  const [array, setArray] = useState([]);

  const add = useCallback(
    (...items) => setArray((array) => [...array, ...items]),
    [setArray]
  );

  const update = useCallback(
    (callback) => setArray((array) => array.map(callback)),
    [setArray]
  );

  const filter = useCallback(
    (callback) => setArray((array) => array.filter(callback)),
    [setArray]
  );

  return [array, { add, update, filter }];
}

export { useArray };
