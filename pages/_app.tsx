import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MarvelProvider } from '_context/MarvelContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MarvelProvider>
      <Component {...pageProps} />
    </MarvelProvider>
    )
}
