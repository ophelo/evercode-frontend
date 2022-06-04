import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

const afterCallback = async (req, res, session, state) => {
  console.log(session);
  return session;
}

export default handleAuth({
    async login(req, res) {
      try {
        await handleLogin(req, res, {
          authorizationParams: {
            audience: (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT, // or AUTH0_AUDIENCE
            // Add the `offline_access` scope to also get a Refresh Token
            scope: 'openid profile email read:messages' // or AUTH0_SCOPE
          },
          returnTo: "/api/user/checkProfile"
        });
      } catch (error) {
        res.status(error.status || 400).end(error.message);
      }
    },
    async callback(req, res) {
      try {
          await handleCallback(req, res, { afterCallback });
      } catch (error) {
          res.status(error.status || 500).end(error.message);
      }
  }
  });