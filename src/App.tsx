import * as React from 'react';
import ThemeToggle from './components/theme-toggle';

function App() {
  return (
    <>
      <div class="container mt-8 max-w-[42rem]">
        <div class="flex justify-between items-center">
          <p class="text-base sm:text-lg md:text-xl lg:text-3xl font-mono font-bold">
            LOOKS GOOD TO ME | #lgtm
          </p>
          <ThemeToggle />
        </div>
        <div class="flex justify-center items-center mt-8">
          <div class="w-full max-w-[42rem]">
            <input
              type="text"
              class="col-span-6 border ring-offset-background bg-stone-100 text-xs font-medium rounded-lg block w-full p-4 dark:bg-accent"
              value="npm install flowbite"
              disabled
              readonly
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
