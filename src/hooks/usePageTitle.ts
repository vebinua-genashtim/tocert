import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} - To-Cert` : 'To-Cert';

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};
