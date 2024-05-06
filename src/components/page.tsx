import * as React from 'react';
import { cn } from '@/lib/utils';

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'flex flex-col space-y-4 justify-center items-center mt-4 w-full max-w-[60rem]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Page;
