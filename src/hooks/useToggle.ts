import { useCallback, useState } from 'react';

export const useToggle = (
  initialState: boolean = false
): [boolean, (state?: boolean) => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((state?: boolean) => {
    if (typeof state === 'boolean') {
      setState(state);
    } else {
      setState((s) => !s);
    }
  }, []);

  return [state, toggle];
};
