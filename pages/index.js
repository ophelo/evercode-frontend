import Head from "next/head";
import LastActivity from "../components/LastActivity";
import { getSession } from "@auth0/nextjs-auth0";
import NavBar2 from "../components/navbar/NavBar2";

export default function Index({ accessToken }) {

    return (
      <LastActivity accessToken={accessToken}>
        <div>
          <div>
            <Head>
              <title>Evercode</title>
              <link rel="icon" href="/everCode.jpg" />
            </Head>
            <div>
              <NavBar2/>
            </div>
          </div>
        </div>
      </LastActivity>
    );
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res)
  if (!session) return { props: {}}
  return { props: { accessToken: session.accessToken } }
}