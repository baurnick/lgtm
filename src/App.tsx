import * as React from 'react';
import ThemeToggle from './components/theme-toggle';

function App() {
  return (
    <>
      <div class="container mt-8">
        <div class="flex justify-between items-center">
          <p class="text-base sm:text-lg md:text-xl lg:text-3xl font-mono font-bold">
            LOOKS GOOD TO ME | #lgtm
          </p>
          <ThemeToggle />
        </div>
        <p class="text-sm mt-4 ">Pimp...</p>
        <div class="flex justify-center items-center"></div>
      </div>
    </>
  );
}

export default App;
