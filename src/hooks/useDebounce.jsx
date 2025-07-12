import React, { useState, useEffect } from 'react';

export function useDebounce(val, delay = 750){
  const [debouncedVal, setDebouncedVal] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);
    return () => clearTimeout(handler);
  }, [val, delay]);

  return debouncedVal;
};