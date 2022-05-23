import Image from "next/image";
import Link from "next/link";
import SideBarText from "./SideBarText";
import { FcSettings } from "react-icons/fc";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Settings from "../Settings";
import CustomButton from "../CustomButton";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className=" fixed flex flex-col left-0 top-0 w-35 h-screen bg-evercodeBlue shadow-md justify-start  gap-0.5">
        <Link href="/">
          <a className="flex items-center justify-center">
            <Image src="/everCode.jpg" height={64} width={64} />
          </a>
        </Link>

        <div className="w-30 flex flex-row justify-center items-center py-2 ">
          <Link href="/writeProject">
            <div className="rounded-md transition ease-in-out h-8 w-14 delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-slate-400 flex justify-center items-center duration-300  bg-slate-200 ">
              <FaPlus size={15} />
            </div>
          </Link>
        </div>

        <SideBarText text="Account" destination="/profile" />
        <SideBarText text="Projects" destination="/listProjects" />
        <SideBarText text="Friends" destination="/friendPage" />
      </div>
      <div
        className="fixed left-1 bottom-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FcSettings size={20} />
      </div>
      <Settings open={open} />
    </div>
  );
};
export default SideBar;
