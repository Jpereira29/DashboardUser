import type { AppProps } from 'next/app'
import { MenuContainer } from '../components/MenuContainer'
import { GlobalStyle } from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuContainer />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
