import { useState } from "react";

export default function useIndex(length: number) {
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    if (index >= length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index <= 0) {
      setIndex(length);
    } else {
      setIndex(index - 1);
    }
  };
  return { index, next, prev };
}
