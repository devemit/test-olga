import { useState } from 'react';

export function useCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((c) => c + 1);
  const decrement = () => setCounter((c) => c - 1);
  const resetCounter = () => setCounter(0);

  return { increment, decrement, resetCounter, counter };
}
