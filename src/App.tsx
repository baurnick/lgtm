import * as React from 'react';
import CopyToClipboardButton from '@/components/copy-to-clipboard-button';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import Header from '@/components/header';
import gifs from '@/data/gifs.json';

function App() {
  const randomStartIndex = Math.floor(Math.random() * gifs.gifs.length);
  const [gif, setGif] = React.useState(gifs.gifs[randomStartIndex]);
  const value = 'Link';

  const setCurrentGif = () => {
    const randomIndex = Math.floor(Math.random() * gifs.gifs.length);
    setGif(gifs.gifs[randomIndex]);
  };

  return (
    <>
      <div className="container mt-8 max-w-[54rem]">
        <Header className="flex justify-between items-center" />
        {/* body */}
        <div className="flex flex-col space-y-4 justify-center items-center mt-8 w-full max-w-[54rem]">
          {/* Gif box */}
          <div className="flex flex-col items-center border ring-offset-background bg-stone-100 rounded-lg w-full p-4 dark:bg-accent">
            <iframe
              src={gif.embeded_url}
              width="300"
              height="300"
              className="rounded-lg"
            />
            <div className="flex flex-row-reverse w-full mt-2">
              <Button
                variant="outline"
                size="iconsm"
                className="dark:bg-accent dark:hover:bg-card "
                onClick={setCurrentGif}
              >
                <RefreshCcw className="h-3 w-3" />
              </Button>
            </div>
          </div>
          {/* Link box */}
          <div className="flex justify-between items-center border ring-offset-background bg-stone-100 rounded-lg w-full p-4 dark:bg-accent">
            <p className="text-xs">{value}</p>
            <CopyToClipboardButton value={value} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
