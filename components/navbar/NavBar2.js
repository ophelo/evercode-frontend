import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { HiOutlineLogout } from "react-icons/hi";
import {FaPlus} from "react-icons/fa"
const NavBar2 = () => {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error.message}</div>;
  if (isLoading) return
    <div className="w-screen h-screen justify-center items-center">
      <Image src="/spin.svg" width={100} height={100} />
    </div>;

  return (
    <div className="bg-bg1">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/everCodeICO.jpg" width={50} height={50} />
            <a
              href="/"
              aria-label="Evercode"
              title="EverCode"
              className="inline-flex items-center mr-8"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                evercode
              </span>
            </a>
            <ul className="flex items-center space-x-8 lg:flex">
              <li className="w-30 flex flex-row justify-center items-center py-2 ">
                <Link href="/writeProject">
                  <div className="rounded-md transition ease-in-out h-8 w-14 delay-150   hover:bg-blue-400 flex justify-center items-center duration-300 bg-bg3 ">
                    <FaPlus size={15} />
                  </div>
                </Link>
              </li>
              <li>
                <a
                  href="/listProjects"
                  className=" hover:font-bold hover:underline ease-in-out delay-100 hover:shadow-xl font-medium tracking-wide text-gray-100 transition-colors duration-100 hover:text-blue-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="hover:font-bold hover:underline ease-in-out delay-100 hover:shadow-xl font-medium tracking-wide text-gray-100 transition-colors duration-100 hover:text-blue-400"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="/friendPage"
                  className="hover:font-bold hover:underline ease-in-out delay-100 hover:shadow-xl font-medium tracking-wide text-gray-100 transition-colors duration-100 hover:text-blue-400"
                >
                  Friends
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-8 lg:flex">
            {user ? (
              <div className="flex flex-row gap-2 shadow-lg rounded-3xl bg-stone-400 px-2 py-1.5 items-center">
                <Image
                  src="/everCode.jpg"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <>{user.name}</>
                <a
                  href="/api/auth/logout"
                  className="shadow-xl bg-bblack p-1 text-white rounded-full"
                >
                  <HiOutlineLogout />
                </a>
              </div>
            ) : (
              <a
                href="/api/auth/login"
                aria-label="Sign in"
                title="Sign in"
                className="transition ease-in-out delay-150 hover:font-bold hover:underline hover:shadow-lg font-medium tracking-wide text-gray-100 duration-100 hover:text-blue-400"
              >
                Sign in
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar2;
