import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clipboard } from 'lucide-react';
import { Toaster, toast } from 'sonner';

type CopyToClipboardButtonProps = {
  value: string;
};

const CopyToClipboardButton = ({ value }: CopyToClipboardButtonProps) => {
  const [check, setCheck] = React.useState(false);
  const DURATION: number = 1500;

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCheck(true);
      setTimeout(() => setCheck(false), DURATION);
      toast.success('Copied to clipboard!', {
        duration: DURATION,
        className: 'text-xs font-mono font-thin',
      });
    } catch (err) {
      toast.error('Failed to copy to clipboard!', {
        duration: DURATION,
        className: 'text-xs font-mono font-thin',
      });
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <Toaster richColors />
      <Button
        variant="outline"
        size="iconsm"
        className="dark:bg-accent dark:hover:bg-card transition duration-150 ease-in-out"
        onClick={copyToClipBoard}
      >
        {!check ? (
          <Clipboard className="h-3 w-3 transition-transform transform rotate-180" />
        ) : (
          <Check className="h-3 w-3 transition-transform transform rotate-0" />
        )}
      </Button>
    </>
  );
};

export default CopyToClipboardButton;
