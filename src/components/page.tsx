import * as React from 'react';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center mt-4 w-full max-w-[54rem]">
      {children}
    </div>
  );
};

export default Page;
