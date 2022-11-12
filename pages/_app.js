import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  )
}

export default MyApp
