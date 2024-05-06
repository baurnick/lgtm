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
import { z } from 'zod';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { convertToEmbeddedUrl } from '@/lib/utils';

const urlSchema = z
  .string()
  .url()
  .refine((url) => url.endsWith('.gif'));

interface Gif {
  url: string;
  embeded: string | undefined;
}

function App() {
  const numberOfGifs = gifs.gifs.length;
  const initialIndex = Math.floor(Math.random() * numberOfGifs);

  const [gif, setGif] = React.useState<Gif>(gifs.gifs[initialIndex]);
  const [gifIndex, setGifIndex] = React.useState<number>(initialIndex);
  const [markdownLink, setMarkdownLink] = React.useState<string>('');
  const [inputValue, setInputValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  const lastGifIndex = React.useRef(initialIndex);

  const setCurrentGif = React.useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * numberOfGifs);
    } while (newIndex === lastGifIndex.current);

    clearInput();
    setGifIndex(newIndex);
    setGif(gifs.gifs[newIndex]);
    lastGifIndex.current = newIndex;
  }, [numberOfGifs]);

  const generateMarkdownForGif = React.useCallback((gif: Gif) => {
    setMarkdownLink(`![GIF](${gif.url})\n\n#lgtm`);
  }, []);

  React.useEffect(() => {
    generateMarkdownForGif(gif);
  }, [gif, generateMarkdownForGif]);

  useKeyboardShortcut('r', setCurrentGif);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  const validateInput = (url: string) => {
    try {
      urlSchema.parse(url);
      setError(null);
      setGif({
        url,
        embeded: convertToEmbeddedUrl(url),
      });
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      } else {
        throw error;
      }
    }
  };

  const clearInput = () => {
    setInputValue('');
    setError(null);
  };

  return (
    <>
      <div className="container mt-8 max-w-[60rem]">
        <Header className="flex justify-between items-center" />
        <Page>
          <Card className="flex flex-col">
            <iframe
              id={gifIndex.toString()}
              src={gif.embeded}
              className="w-full sm:w-64 md:w-96 lg:w-128 aspect-square rounded-lg"
            />
            <div className="flex flex-row-reverse w-full mt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="iconsm"
                      className="dark:bg-accent dark:hover:bg-card "
                      onClick={setCurrentGif}
                    >
                      <RefreshCcw className="h-3 w-3" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2 text-sm font-thin font-mono">
                      <p>Click</p>
                      <div className=" text-white bg-slate-600 py-0.5 px-2 rounded-sm">
                        <p>r</p>
                      </div>
                      <p>to randomize</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
          <Card className="flex justify-between">
            <p className="text-sm font-mono pr-8">Markdown to copy</p>
            <CopyToClipboardButton value={markdownLink} />
          </Card>
          <div className="flex justify-between items-start w-full">
            <Input
              type="url"
              value={inputValue}
              onChange={onChange}
              placeholder="Markdownify GIPHY-url"
              error={error}
            />
            {inputValue && (
              <Button
                variant="outline"
                size="default"
                className="ml-2 h-12 bg-red-600 hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-400"
                onClick={clearInput}
              >
                <Trash2 className="h-4 w-4" style={{ color: '#fff' }} />
              </Button>
            )}
          </div>
        </Page>
      </div>
    </>
  );
}

export default App;
