import { useRef, TouchEvent } from "react";
import { TABS_MAX } from "../consts/tabs";

const useSwipeDetection = (
  tabSelected: number,
  setTabSelected: React.Dispatch<React.SetStateAction<number>>,
  // the required distance between touchStart and touchEnd to be detected as a swipe
  minSwipeDistance = 50
) => {
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const onSwipeStart = (e: TouchEvent) => {
    // to avoid that the swipe is fired even with usual touch events
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onSwipeMove = (e: TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onSwipeEnd = () => {
    const touchStart = touchStartRef.current;
    const touchEnd = touchEndRef.current;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && tabSelected < TABS_MAX) {
      setTabSelected(tabSelected + 1);
    }

    if (isRightSwipe && tabSelected > 1) {
      setTabSelected(tabSelected - 1);
    }
  };

  return { onSwipeStart, onSwipeMove, onSwipeEnd };
};

export default useSwipeDetection;
