import { HiHome } from "react-icons/hi";
import {IoSettingsSharp} from 'react-icons/io5'
import {MdVideoLibrary} from 'react-icons/md'
import {HiTrendingUp} from 'react-icons/hi'


const Sidebar = () => {
  return (
      <div
        className="h-screen max-w-[110px] w-24 m-0 
                    flex flex-col dark:bg-slate-800
                    bg-slate-50
                     text-white  shadow-lg"
      >
        <SideBarIcon icon={<HiHome size="26" />} />
        <SideBarIcon icon={<HiTrendingUp size="26" />} />
        <SideBarIcon icon={<MdVideoLibrary size="26" />} />
        <SideBarIcon icon={<IoSettingsSharp size="26" />} align="bottom" />


      </div>
   
  );
};

const SideBarIcon = ({ icon, align }) => (
  <div className="sidebar-icon group" >
    {icon}

    {/* <span class="sidebar-tooltip group-hover:scale-100">jjjjj</span> */}
  </div>
);
export default Sidebar;
