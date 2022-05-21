import Image from "next/image";
import Link from "next/link";
import SideBarText from "./SideBarText";
import SideBarButton from "./SideBarButton";
import { FcSettings } from "react-icons/fc";
import { useState } from "react";
import Settings from "../Settings";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex flex-col fixed left-0 top-0 w-20 h-screen bg-gray-700 shadow-md justify-start gap-0.5">
      <Link href="/">
        <a className="flex items-center justify-center">
          <Image src="/everCode.jpg" height={64} width={64} />
        </a>
      </Link>

      <SideBarText text="Account" destination="/profile" />
      <SideBarText text="Projects" destination="/listProjects" />
      <SideBarText text="Friends" destination="/friendPage" />
      <input type="button" value="ciao" onClick={()=>{console.log("it works")}} />
      <button 
        icon={<FcSettings size={28} />}
        handler={() => setOpen(!open)}
        state={open}
      />
      <Settings open={open} />
    </div>
  );
};
export default SideBar;
