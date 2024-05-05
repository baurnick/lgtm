import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToEmbeddedUrl = (url: string) => {
  const regex = /\/media\/.*\/(.*?)\/giphy\.gif$/;
  const match = url.match(regex);

  if (match && match[1]) {
    return `https://giphy.com/embed/${match[1]}`;
  }
};
