import "../styles/globals.css";
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps, router }) {
  return (
    <UserProvider>
      <Component {...pageProps} router={router} />
    </UserProvider>
  );
}

export default MyApp;
