import * as React from 'react';
import CopyToClipboardButton from '@/components/copy-to-clipboard-button';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import Header from '@/components/header';
import gifs from '@/data/gifs.json';

function App() {
  const numberOfGifs = gifs.gifs.length;
  const initialIndex = Math.floor(Math.random() * numberOfGifs);

  const [gif, setGif] = React.useState(gifs.gifs[initialIndex]);
  const [gifIndex, setGifIndex] = React.useState(initialIndex);
  const [markdownLink, setMarkdownLink] = React.useState('');

  const lastGifIndex = React.useRef(initialIndex);

  const setCurrentGif = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * numberOfGifs);
    } while (newIndex === lastGifIndex.current);

    setGifIndex(newIndex);
    setGif(gifs.gifs[newIndex]);
    lastGifIndex.current = newIndex;
  };

  const generateMarkdownForGif = React.useCallback((gif) => {
    setMarkdownLink(`![GIF](${gif.url})`);
  }, []);

  React.useEffect(() => {
    generateMarkdownForGif(gif);
  }, [gif, generateMarkdownForGif]);

  return (
    <>
      <div className="container mt-8 max-w-[54rem]">
        <Header className="flex justify-between items-center" />
        {/* body */}
        <div className="flex flex-col space-y-4 justify-center items-center mt-8 w-full max-w-[54rem]">
          {/* Gif box */}
          <div className="flex flex-col items-center border ring-offset-background bg-stone-100 rounded-lg w-full p-4 dark:bg-accent">
            <iframe
              id={gifIndex}
              src={gif.embeded}
              width="350"
              height="350"
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
            <p className="text-xs truncate flex-1 pr-8">{markdownLink}</p>
            <CopyToClipboardButton value={markdownLink} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
