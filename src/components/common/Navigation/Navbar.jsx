import React from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "./extra/themeSwitcher";
import { useSelector } from "react-redux";
import logo from "../../../assets/brand/logo.svg"
import logo_dark from "../../../assets/brand/logo_dark.svg"
import SearchBox from "./SearchBox/SearchBox";


const Navbar = ({ searchRef }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);

  return (
    <div className="w-full h-16 ">
      <div className="w-full h-16  flex items-center relative justify-center">
        <header className="h-16 w-full flex px-5  relative bg-slate-200/80  dark:bg-slate-800 text-white justify-between">
          <div
            className="flex items-center justify-center text-slate-900 md:text-xl font-bold dark:text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            {/* <CgPlayButtonO className="text-2xl mr-2" />| ViewCord */}
            {theme === "dark" ? <img src={logo_dark} alt="logo" className="h-8 w-8 mr-2" /> : <img src={logo} alt="logo" className="h-8 w-8 mr-2" />}| ViewCord
          </div>
          <div className="h-[42px] m-auto">
            <SearchBox searchRef={searchRef}  />
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-0">
            <HiSearch
              className="sm:hidden text-neutral-800 dark:text-white cursor-pointer"
              size={24}
            />

            <ThemeSwitcher />
          </div>
        </header>
        {/* <SearchBox searchRef={searchRef} /> */}
      </div>
    </div>
  );
};

export default Navbar;
