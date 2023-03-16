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
      className="h-[92vh] shrink  max-w-[110px]  m-0 md:flex flex-col dark:bg-slate-800 bg-slate-50 text-white  shadow-lg hidden"
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
