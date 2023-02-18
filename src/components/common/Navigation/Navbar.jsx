import React, {useState, useEffect} from "react";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import {CgPlayButtonO} from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { getLocal, setLocal } from "../../utils/StorageUtils";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = React.useRef(null);

  useEffect(() => {
    inputRef?.current?.addEventListener("keydown", onKeyDownHandler);

    return () => {
      inputRef?.current?.removeEventListener("keydown", onKeyDownHandler);
    }
 }, []);

 const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      searchQuery != "" ? navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`):
      alert("Please enter a valid search query");
    }
  };

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value); 
  };

  const switchDisplayMode = () => {
    setLocal(
      "theme",
      getLocal("theme") === "dark" ? "light" : "dark"
    );
    window.location.reload();
  };
 
  return (

    <div className="w-full h-16 ">
      <div className="w-full h-16  flex items-center relative justify-center">
        <header className="h-16 w-full flex px-5  relative bg-slate-200/80  dark:bg-slate-800 text-white justify-between">
          <div className="flex items-center justify-center text-slate-900 md:text-2xl font-bold dark:text-white cursor-pointer"
          onClick={() => navigate("/")}
          >
            <CgPlayButtonO className="text-2xl mr-2" />
            | 
            ViewTube
          </div>
          <div className="h-[42px] m-auto"          >
            <div className="relative flex-row rounded-full hidden sm:flex overflow-hidden">
              <input
                type="search"
                value={searchQuery}
                ref={inputRef}
                onChange={onChangeHandler}
                id="default-search"
                className="block w-full min-w-[320px] h-[40px] pl-4  text-sm text-gray-800  bg-slate-300  dark:bg-slate-700  outline-none 
         dark:placeholder-slate-400 dark:text-white  placeholder:text-gray-600"
                placeholder="Get something to watch"
              />

              <div className="flex w-[68px] h-[40px] items-center justify-center bg-slate-400 dark:bg-slate-900  border-l-1 cursor-pointer"
              onClick={() => {
                searchQuery != "" ? navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`):
                alert("Please enter a valid search query");
              }}>
                <HiSearch className=" text-neutral-800 dark:text-white " size={24} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-0">
          <HiSearch className="sm:hidden text-neutral-800 dark:text-white cursor-pointer" size={24} />
            {getLocal("theme") === "dark" ? (
              <MdOutlineLightMode
                className="text-black dark:text-white cursor-pointer "
                size={24}
                onClick={switchDisplayMode}
              />
            ) : (
              <MdOutlineNightlight
                className="text-black dark:text-white cursor-pointer "
                size={24}
                onClick={switchDisplayMode}
              />
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
