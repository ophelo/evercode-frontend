import RecvCard from "./RecvCard"

export default function GridReq({ requests, accessToken, setDisable }) {
    return (
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(125px,1fr))] md:grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] md:gap-8">
        {requests ? requests.map((r)=>{
            return (<RecvCard id={r._id} username={r.sender.username} accessToken={accessToken} setDisable={setDisable} />)
            }): (<h1>loading..</h1>)}
      </div>
    )
}