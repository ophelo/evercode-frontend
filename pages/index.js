import Head from "next/head";
import SideBar from "../components/sidebar/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evercode</title>
        <link rel="icon" href="/everCode.ico" />
      </Head>
      <div className="flex ">
        <SideBar />
        <div className=" bg-gray-800 h-screen  w-screen"></div>
      </div>
    </div>
  );
}
