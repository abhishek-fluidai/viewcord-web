import React, {useState, useEffect} from "react";
import { HiHome } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdVideoLibrary,MdOutlinePlaylistPlay} from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import {RiPlayList2Fill} from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className="max-w-full w-full md:w-fit h-fit md:h-full  md:max-w-[110px] justify-around md:justify-start  m-0 flex  flex-row md:flex-col dark:bg-slate-800 bg-slate-50 text-white  shadow-lg absolute md:relative z-10 bottom-0 left-0 right-0"
    >
      <SideBarIcon icon={<HiHome size="26" />} url="/" />
      <SideBarIcon icon={<HiTrendingUp size="26" />} url="/trending" />
      <SideBarIcon icon={<MdVideoLibrary size="26" />} url="/feed/subscriptions" />
      <SideBarIcon icon={<RiPlayList2Fill size="24" />} url="/feed/library" />
      {/* <SideBarIcon icon={<MdOutlinePlaylistPlay size="26" />} url="/library" /> */}
      <SideBarIcon icon={<IoSettingsSharp size="26" />}  url="/preferences" />

    </div>
  );
};

const SideBarIcon = ({ icon, url , ishome}) => (
  <NavLink {...(ishome ? "exact" : "")} to={url} activeclassname="active">
    <div className="sidebar-icon group">
      {icon}
    </div>
  </NavLink>
);
export default Sidebar;
