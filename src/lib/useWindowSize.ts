import { useCallback, useEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

/**
 * @description window가 초기화되기 전에는 `undefined` return. 사용하는 곳에서 예외 처리 필요.
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return { windowSize };
}
