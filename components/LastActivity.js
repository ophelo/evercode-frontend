import useSWR from "swr";
import { fetcherPost } from "../utils/fetcher";

export default function LastActivity({ children, accessToken }) {
  if (!accessToken) return (<>{children}</>);
  
  const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

  useSWR({url: url + '/api/user/setLastActivity', token: accessToken }, fetcherPost, {
      refreshInterval: 10000
    });
  return (<>{children}</>);
}