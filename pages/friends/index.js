import NavBar2 from "../../components/navbar/NavBar2";
import FriendWallCard from "../../components/friend/WallCard";
import { useEffect, useState } from "react";
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from "axios";
import GridRecv from "../../components/friend/request/GridRecv";
import GridSend from "../../components/friend/request/GridSend";

export default function FriendsPage({ accessToken }) {
  const [friends, setFriends ] = useState([]);
  const [sendRequest, setSendRequest] = useState([]);
  const [receivedRequest, setReceivedRequest] = useState([]);
  const [disable, setDisable ] = useState(false)
  const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

  useEffect(() => {
    axios.get(url+'/api/friend',{
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).then((resp) => {
      setFriends(resp.data);
    })
    axios.get(url+'/api/friend/request',{
      headers: {
        Authorization: 'Bearer ' + accessToken
      },
      params:{
        type: 'send',
      }
    }).then((resp) => {
      setSendRequest(resp.data);
    })
    axios.get(url+'/api/friend/request',{
      headers: {
        Authorization: 'Bearer ' + accessToken
      },
      params:{
        type: 'received',
      }
    }).then((resp) => {
      setReceivedRequest(resp.data);
    })
    setDisable(false)
  },[disable])
  return (
    <>
      <NavBar2 />
        <div className="">
            <div className="flex flex-row flex-wrap">
                <aside className="bg-white shadow-md w-full sm:w-1/3 md:w-1/4 py-3 px-2">
                    <div className="font-bold mb-2 ml-1.5">
                        Amici
                    </div>
                    <div className="sticky top-0 p-1 w-full">
                        {friends ? friends.map((f)=>{
                          return (<FriendWallCard name={f.username}/>)
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
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const { accessToken } = await getAccessToken(req, res)
    .catch(err => {
      res.setHeader("location", "/api/auth/login");
      res.statusCode = 302;
      res.end();
    })
  console.log(accessToken)
  return { props: { accessToken } }
}