import { useEffect, useState } from 'react';

export const useBrowser = () => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser;
};
