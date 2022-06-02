import NavBar2 from "../../components/navbar/NavBar2";
import FriendReqCard from "../../components/FriendReqCard";
import FriendWallCard from "../../components/FriendWallCard";
import { useEffect, useState } from "react";
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from "axios";

export default function FriendsPage({ accessToken }) {
  const [friends, setFriends ] = useState([]);
  const [requests, setRequests] = useState([]);
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
      }
    }).then((resp) => {
      setRequests(resp.data);
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
                    <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(200px,1fr))]">
                    {requests ? requests.map((r)=>{
                          console.log(r._id)
                          return (<FriendReqCard id={r._id} random={r.sender.username} accessToken={accessToken} setDisable={setDisable} />)
                        }): (<h1>loading..</h1>)}
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const { accessToken } = await getAccessToken(req, res);
  return { props: { accessToken } }
}