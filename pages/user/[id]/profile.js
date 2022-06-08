import LastActivity from "../../../components/LastActivity";
import NavBar2 from "../../../components/navbar/NavBar2";
import { getSession } from "@auth0/nextjs-auth0";

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

export default function Profile({ accessToken }) {
  return (
    <LastActivity accessToken={accessToken}>
       <div>
        <NavBar2/>
      </div>
    </LastActivity>
  );
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res)
  if (!session) return { props: {}}
  return { props: { accessToken: session.accessToken } }
}