import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
