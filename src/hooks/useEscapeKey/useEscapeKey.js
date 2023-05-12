import { useEffect, useRef } from 'react';

function useEscapeKey(callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Escape') {
        callbackRef.current();
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
}

export default useEscapeKey;
