import useSWR from "swr";
import { fetcherPost } from "../utils/fetcher";

export default function LastActivity({ children, accessToken }) { 
  const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

  // SWR conditionally fetch
  useSWR(accessToken ? {url: url + '/api/user/setLastActivity' , token: accessToken } : null, fetcherPost, {
    refreshInterval: 10000
  });

  return (<>{children}</>);
}