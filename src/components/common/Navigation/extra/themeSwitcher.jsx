import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../../../redux/themeState";

export default function ThemeSwitcher() {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const switchDisplayMode = () => {
        dispatch(switchTheme());
    };
    
    return (
        <>
         {theme === "dark" ? (
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
        </>
    );
    }
