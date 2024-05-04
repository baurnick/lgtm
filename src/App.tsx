import * as React from 'react';
import CopyToClipboardButton from '@/components/copy-to-clipboard-button';
import { Button } from '@/components/ui/button';
import { RefreshCcw, Trash2 } from 'lucide-react';
import Header from '@/components/header';
import gifs from '@/data/gifs.json';
import useKeyboardShortcut from './hooks/useKeyboardShortcut';
import Page from '@/components/page';
import Card from '@/components/card';
import { Input } from '@/components/ui/input';

function App() {
  const numberOfGifs = gifs.gifs.length;
  const initialIndex = Math.floor(Math.random() * numberOfGifs);

  const [gif, setGif] = React.useState(gifs.gifs[initialIndex]);
  const [gifIndex, setGifIndex] = React.useState(initialIndex);
  const [markdownLink, setMarkdownLink] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const lastGifIndex = React.useRef(initialIndex);

  const setCurrentGif = React.useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * numberOfGifs);
    } while (newIndex === lastGifIndex.current);

    setGifIndex(newIndex);
    setGif(gifs.gifs[newIndex]);
    lastGifIndex.current = newIndex;
  }, [numberOfGifs]);

  const generateMarkdownForGif = React.useCallback((gif) => {
    setMarkdownLink(`![GIF](${gif.url})\n\n#lgtm`);
  }, []);

  React.useEffect(() => {
    generateMarkdownForGif(gif);
  }, [gif, generateMarkdownForGif]);

  useKeyboardShortcut('r', setCurrentGif);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <>
      <div className="container mt-8 max-w-[54rem]">
        <Header className="flex justify-between items-center" />
        <Page className="flex flex-col space-y-4 justify-center items-center mt-4 w-full max-w-[54rem]">
          <Card className="flex flex-col">
            <iframe
              id={gifIndex}
              src={gif.embeded}
              className="w-full sm:w-64 md:w-96 lg:w-128 aspect-square rounded-lg"
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
          </Card>
          <Card className="flex justify-between">
            <p className="text-xs font-mono pr-8">Markdown to copy</p>
            <CopyToClipboardButton value={markdownLink} />
          </Card>
          <div className="flex justify-between w-full items-center">
            <Input
              type="url"
              value={inputValue}
              onChange={onChange}
              placeholder="Markdownify GIPHY-url"
              className="mr-2"
            />
            <Button
              variant="outline"
              size="default"
              className="h-12 bg-red-600 hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-400"
              onClick={() => setInputValue('')}
            >
              <Trash2 className="h-4 w-4" style={{ color: '#fff' }} />
            </Button>
          </div>
        </Page>
      </div>
    </>
  );
}

export default App;
