import { ChangeEvent, ReactNode } from "react";

export interface characters {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<string>;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface featType {
  id: number;
  name: string;
}

export type data = {
  chars: Array<characters>,
  setChars: (newState: Array<characters>) => void
  featChars: Array<characters>,
  setFeatChars: (newState: Array<characters>) => void
  loading: boolean,
  setLoading: (newState: boolean) => void,
  handleMoreChars: () => void,
  email: string,
  setEmail: (newState: string) => void,
  handleValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export type ProviderChildrenProp = {
  children: ReactNode;
}
