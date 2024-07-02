import { ReactElement, RefObject, useCallback, useRef } from "react";
import { scrollAnimation } from "./scrollAnimation";

export const useScroll = (): [RefObject<HTMLDivElement>, () => void] => {
  const ref = useRef<HTMLDivElement>(null);
  const moveTo = useCallback(() => {
    const top = ref?.current?.getBoundingClientRect()?.top;
    if (top === undefined) return;
    scrollAnimation(100, top + window.pageYOffset);
  }, []);

  return [ref, moveTo];
};