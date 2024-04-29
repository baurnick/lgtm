import * as React from 'react';
import ThemeToggle from './components/theme-toggle';

function App() {
  return (
    <>
      <div class="container mt-8">
        <div class="flex justify-between items-center">
          <p class="text-base sm:text-lg md:text-xl lg:text-4xl font-mono font-bold">
            LOOKS GOOD TO ME
          </p>
          <ThemeToggle />
        </div>
        <p class="text-sm mt-4 ">Pimp your MR's</p>
      </div>
    </>
  );
}

export default App;
