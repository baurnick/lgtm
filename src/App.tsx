import * as React from 'react';
import ThemeToggle from '@/components/theme-toggle';
import CopyToClipboardButton from '@/components/copy-to-clipboard-button';

function App() {
  const value = 'Link';

  return (
    <>
      <div className="container mt-8 max-w-[54rem]">
        <div className="flex justify-between items-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-mono font-bold">
            LOOKS GOOD TO ME | #lgtm
          </p>
          <ThemeToggle />
        </div>
        {/* body */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-full max-w-[54rem]">
            {/* Link box */}
            <div className="flex justify-between items-center border ring-offset-background bg-stone-100 rounded-lg w-full p-4 dark:bg-accent">
              <p className="text-xs font-medium">{value}</p>
              <CopyToClipboardButton value={value} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
