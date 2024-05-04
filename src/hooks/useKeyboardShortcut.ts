import * as React from 'react';

type Action = () => void;

const useKeyboardShortcut = (key: string, action: Action) => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        action();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, action]);
};

export default useKeyboardShortcut;
