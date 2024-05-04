import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'items-center border ring-offset-background bg-stone-100 rounded-lg w-full p-4 dark:bg-accent',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
