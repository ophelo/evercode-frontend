import { handleAuth, handleCallback, handleLogin, getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';

const afterCallback = async (req, res, session, state) => {
  //if ( session.user.) // qui farò il controllo se nei metadati dell'utente la voce isInitialized è false oppure true
  const { accessToken } = await getAccessToken(req, res);
  const respBody = await axios.get(process.env.BACK_ENDPOINT+ "api/user/firstConfig",{
    headers: {
        'Authorization': "Bearer " + accessToken
    }
  });
  console.log(respBody);
  return session;
};

export default handleAuth({
    async login(req, res) {
      try {
        await handleLogin(req, res, {
          authorizationParams: {
            audience: 'http://localhost:5000', // or AUTH0_AUDIENCE
            // Add the `offline_access` scope to also get a Refresh Token
            scope: 'openid profile email read:messages' // or AUTH0_SCOPE
          },
          returnTo: "/api/user/firstConfig"
        });
      } catch (error) {
        res.status(error.status || 400).end(error.message);
      }
    },
  });