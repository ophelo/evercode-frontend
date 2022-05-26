import Head from "next/head";
// import { useUser } from "@auth0/nextjs-auth0";
import NavBar2 from "../components/sidebar/NavBar2";

export default function Index() {

    return (
      <div>
        <div>
          <Head>
            <title>Evercode</title>
            <link rel="icon" href="/everCodeICO.jpg" />
          </Head>
          <div>
            <NavBar2/>
          </div>
        </div>
      </div>
    );
}
