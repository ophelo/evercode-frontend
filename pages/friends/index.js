import NavBar2 from "../../components/navbar/NavBar2";
import FriendWallCard from "../../components/friend/WallCard";
import { useEffect, useState } from "react";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import GridRecv from "../../components/friend/request/GridRecv";
import GridSend from "../../components/friend/request/GridSend";
import useSWR from 'swr'
import { fetcherGet } from "../../utils/fetcher";
import LastActivity from "../../components/LastActivity";

export default function FriendsPage({ accessToken }) {
  
  const [disable, setDisable ] = useState(false)
  const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

  const { data: friends , error } = useSWR({ 
    url: url + '/api/friend',
    token: accessToken,
  }, fetcherGet, {
    refreshInterval: 10000
  });

  const { data: sendRequest , error : sendError } = useSWR({
    url: url + '/api/friend/request',
    token: accessToken,
    params: {
      type: 'send',
    }
   }, fetcherGet, {
    refreshInterval: 10000
  });

  const { data: receivedRequest , error : receivedError } = useSWR({
    url: url + '/api/friend/request',
    token: accessToken,
    params: {
      type: 'received',
    }
   }, fetcherGet, {
    refreshInterval: 10000
  });

  useEffect(() => {
    setDisable(false)
  },[disable])
  
  return (
    <LastActivity accessToken={accessToken}>
      <NavBar2 />
        <div>
            <div className="flex flex-row h-screen">
                <aside className="bg-white shadow-md w-full sm:w-1/3 md:w-1/4 py-3 px-2">
                    <div className="font-bold mb-2 ml-1.5">
                        Amici
                    </div>
                    <div className="sticky top-0 p-1 w-full">
                        {friends ? friends.map((f,id)=>{
                          return (<FriendWallCard key={id} name={f.username} status={f.status}/>)
                        }): (<h1>loading..</h1>)}
                    </div>
                </aside>
                <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-5 md:px-5 lg:px-5 ">
                    {sendRequest && sendRequest.length ? <div className="text-xl font-bold">Request Sent:</div> : ""}
                    <GridSend accessToken={accessToken} setDisable={setDisable} requests={sendRequest} />
                    {receivedRequest && receivedRequest.length ? <div className="text-xl font-bold">Request Received:</div> : ""}
                    <GridRecv accessToken={accessToken} setDisable={setDisable} requests={receivedRequest} />
                </main>
            </div>
        </div>
    </LastActivity>
  );
}

// Version with authorization page check
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({req, res}) {
    const session = getSession(req, res);
    return { props: { accessToken: session?.accessToken, user: session?.user } }
  }
});
