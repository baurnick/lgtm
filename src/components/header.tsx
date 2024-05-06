import * as React from 'react';
import ThemeToggle from '@/components/theme-toggle';

interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col">
        <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-mono font-bold">
          LOOKS GOOD TO ME
        </p>
        <p className="text font-mono font-thin">
          PIMP YOUR GITLAB MERGE REQUEST WITH STYLE!
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
