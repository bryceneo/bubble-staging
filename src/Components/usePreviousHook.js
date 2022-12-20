import { useEffect, useRef } from "react";

export default function usePrevious(value) {
  const ref = useRef();
  console.log(value);
  useEffect(() => {
    ref.current = value;
  });
  console.log(ref.current);
  return ref.current;
}
