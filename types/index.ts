import { ReactNode } from "react";

interface characters {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<string>;
  thumbnail: string;
  // comics:
  // stories:
  // events:
  // series:
}
export type data = {
  chars: Array<characters>,
  setChars: (newState: Array<characters>) => void
}

export type ProviderChildrenProp = {
  children: ReactNode;
}
