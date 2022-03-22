import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
