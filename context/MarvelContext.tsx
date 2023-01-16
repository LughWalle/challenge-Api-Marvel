import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { data, ProviderChildrenProp, } from 'types';
import md5 from 'blueimp-md5';
require('dotenv').config();

const initialValue = {
  chars: [{
    id: -1,
    name: '',
    description: '',
    modified: new Date(),
    resourceURI: '',
    urls: [''],
    thumbnail: '',
  }],
  setChars: () => { }
}

export const MarvelContext = createContext<data>(initialValue);

export const MarvelProvider = ({ children }: ProviderChildrenProp) => {
  const [chars, setChars] = useState(initialValue.chars)

  const url: any = process.env.NEXT_PUBLIC_URL
  const pubKey: any = process.env.NEXT_PUBLIC_PUB_KEY
  const pvKey: any = process.env.NEXT_PUBLIC_PV_KEY
  const timeStamp = Number(new Date())

  const hash = md5(timeStamp + pvKey + pubKey)

  const getChars = () => {
    axios.get(
      `${url}/characters?ts=${timeStamp}&apikey=${pubKey}&hash=${hash}`
      )
        .then((res) => setChars(res.data.data.results))
        .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getChars()
  
  }, [])
  

  return (
    <MarvelContext.Provider value={{ chars, setChars }} >
      {children}
    </MarvelContext.Provider>
  )
}
