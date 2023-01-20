import axios from 'axios';
import { ChangeEvent, createContext, FormEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import apiMarvel from 'service/api';
import { data, ProviderChildrenProp, characters, featType } from 'types';
import { setEmitFlags } from 'typescript';
import featuresChars from './featuredCharsData';
const initialValue = {
  chars: [{
    id: -1,
    name: '',
    description: '',
    modified: new Date(),
    resourceURI: '',
    urls: [''],
    thumbnail: {
      path: '',
      extension: '',
    },
  }],
  setChars: () => { },
  featChars: [{
    id: -1,
    name: '',
    description: '',
    modified: new Date(),
    resourceURI: '',
    urls: [''],
    thumbnail: {
      path: '',
      extension: '',
    },
  }],
  setFeatChars: () => { },
  loading: false,
  setLoading: () => {},
  handleMoreChars: () => {},
  email: '',
  setEmail: () => {},
  handleValue: () => {}
}

export const MarvelContext = createContext<data>(initialValue);

export const MarvelProvider = ({ children }: ProviderChildrenProp) => {
  const [chars, setChars] = useState<characters[]>([])
  const [featChars, setFeatChars] = useState<characters[]>([])
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>('')
  const [offset, setOffset] = useState<number>(30)

  const getChars = (offset?: number | null) => {
    apiMarvel.get('/characters', {
      params: {
        offset,
      }
    })
      .then(({ data: { data} }) => {
        console.log(data);
        
        // offset ? setChars([...chars, ...data.results]) : setChars(data.results)
        setChars(data.results)
      })
      .catch(err => console.log(err))
  }



  const getFeatureChars = async (features: Array<featType>) => {
    features.forEach((feat) => {
      apiMarvel.get(`/characters/${feat.id}`)
      .then((res) => {
        const [ char ] = res.data.data.results;
        setFeatChars(prev => [...prev, char])
        setLoading(false)
      })
      .catch(err => console.log(err))
    })
    
  }

  useEffect(() => {
    getChars();
    console.log('useEffet', loading);
    if(loading) {
      getFeatureChars(featuresChars.chars)    
    }
  }, [loading])

  const handleMoreChars = useCallback(
    async () => {
      try {
        const offset = chars.length;
        console.log('offset: ', offset);
        
        getChars(offset)
      } catch (err) {
        console.log(err);        
      }
    },
    [chars],
  )
  
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
  }

  return (
    <MarvelContext.Provider value={{ handleValue, setEmail, email, handleMoreChars, loading, setLoading, chars, setChars, featChars, setFeatChars }} >
      {children}
    </MarvelContext.Provider>
  )
}
