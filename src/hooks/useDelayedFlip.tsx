import { useEffect, useState } from "react";

const useDelayedFlip = (flip: boolean, delay: number = 1000) => {
  const [flipDelayed, setFlipDelayed] = useState(flip);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFlipDelayed(flip);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [flip, delay]);

  return { flipDelayed };
};

export default useDelayedFlip;
