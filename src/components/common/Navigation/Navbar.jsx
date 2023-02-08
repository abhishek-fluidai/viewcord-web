import React, {useState, useEffect} from "react";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        getSearchResult();
      }
  });
  }, []);

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value); 

  };

  const getSearchResult = () => {
    navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
  };

 

  const switchDisplayMode = () => {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "dark" ? "light" : "dark"
    );
    window.location.reload();
  };
 
  return (

    <div className="w-full h-16 ">
      <div className="w-full h-16  flex items-center relative justify-center">
        <header className="h-16 w-full max-w-[1920px]  flex  px-5  relative bg-slate-200/80  dark:bg-slate-800 text-white justify-between">
          <div className="h-[42px] m-auto  "
          >
            <div className="relative flex flex-row  rounded-full overflow-hidden">
              <input
                type="search"
                value={searchQuery}
                onSubmit={getSearchResult}
                onChange={onChangeHandler}
                id="default-search"
                className="block w-full min-w-[320px] h-[40px] pl-4  text-sm text-gray-800  bg-slate-300  dark:bg-slate-700  outline-none 
         dark:placeholder-slate-400 dark:text-white  placeholder:text-gray-600"
                placeholder="Get something to watch"
              />

              <div className="flex w-[68px] h-[40px] items-center justify-center bg-slate-400 dark:bg-slate-900  border-l-1 cursor-pointer"
              onClick={getSearchResult}>
                <HiSearch className=" text-neutral-800 dark:text-white " size={24} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {localStorage.getItem("theme") === "dark" ? (
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
