import { HiHome } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen shrink  max-w-[110px]  m-0 md:flex flex-col dark:bg-slate-800 bg-slate-50 text-white  shadow-lg hidden "
    >
      <SideBarIcon icon={<HiHome size="26" />} url="/" />
      <SideBarIcon icon={<HiTrendingUp size="26" />} url="/trending" />
      <SideBarIcon icon={<MdVideoLibrary size="26" />} />
      <SideBarIcon icon={<IoSettingsSharp size="26" />}  url="/preferences" align="bottom" />
    </div>
  );
};

const SideBarIcon = ({ icon, align, url }) => (
  <Link to={url}>
  <div className="sidebar-icon group">
    {icon}
  </div>
  </Link>
);
export default Sidebar;
