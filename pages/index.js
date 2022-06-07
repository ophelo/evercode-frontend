import Head from "next/head";
import LastActivity from "../components/LastActivity";
import { getSession } from "@auth0/nextjs-auth0";
import NavBar2 from "../components/navbar/NavBar2";
import { Tab } from "@headlessui/react";
import Feed from "../components/Feed";
import { Fragment } from "react";

export default function Index({ accessToken }) {
  return (
    <LastActivity accessToken={accessToken}>
      <div>
        <div>
          <Head>
            <title>Evercode</title>
            <link rel="icon" href="/everCode.jpg" />
          </Head>
          <div className="flex flex-col w-screen h-screen ">
            <NavBar2 />
            <div className="flex flex-col justify-center items-center">
              <Tab.Group>
                <Tab.List className=" flex gap-2 mt-3">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? "bg-blue-400 text-white rounded-md shadow-md w-24 h-6 text-center"
                            : "bg-bg1 text-white rounded-md shadow-md w-24 h-6 text-center"
                        }
                      >
                        Following
                      </div>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? "bg-blue-400 text-white rounded-md shadow-md w-24 h-6 text-center"
                            : "bg-bg1 text-white rounded-md shadow-md w-24 h-6 text-center"
                        }
                      >
                        Trending
                      </div>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <Feed route="/api/followingFeed" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <Feed route="/api/trendingFeed"/>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </LastActivity>
  );
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res);
  if (!session) return { props: {} };
  return { props: { accessToken: session.accessToken } };
}
