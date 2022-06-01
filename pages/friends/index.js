import NavBar2 from "../../components/navbar/NavBar2";
import FriendReqCard from "../../components/FriendReqCard";
import FriendWallCard from "../../components/FriendWallCard";

export default function FriendsPage() {
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
                        <FriendWallCard name="Davide Frageri"/>
                        <FriendWallCard name="Alberto Frageri"/>
                        <FriendWallCard name="Tania Felice"/>
                        <FriendWallCard name="Mario Rossi"/>
                        <FriendWallCard name="Martina Frageri"/>
                        <FriendWallCard name="Andrea Turnoli"/>
                        
                    </div>
                </aside>
                <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-5 md:px-5 lg:px-5 ">
                    <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,1fr))]">
                        <FriendReqCard favLang="c++" random="user1" />
                        <FriendReqCard favLang="c++" random="user2" />
                        <FriendReqCard favLang="c++" random="user3" />
                        <FriendReqCard favLang="c++" random="user4" />
                        <FriendReqCard favLang="c++" random="user5" />
                        <FriendReqCard favLang="c++" random="user6" />
                        <FriendReqCard favLang="c++" random="user1" />
                        <FriendReqCard favLang="c++" random="user2" />
                        <FriendReqCard favLang="c++" random="user3" />
                        <FriendReqCard favLang="c++" random="user4" />
                        <FriendReqCard favLang="c++" random="user5" />
                        <FriendReqCard favLang="c++" random="user6" />
                        <FriendReqCard favLang="c++" random="user1" />
                        <FriendReqCard favLang="c++" random="user2" />
                        <FriendReqCard favLang="c++" random="user3" />
                        <FriendReqCard favLang="c++" random="user4" />
                        <FriendReqCard favLang="c++" random="user5" />
                        <FriendReqCard favLang="c++" random="user6" />
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}

{/*  */}