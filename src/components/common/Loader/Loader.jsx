import React from "react";
import styles from "./Loader.module.css";
import { useSelector } from "react-redux";

const SmallLoader = () => {
    const loader = useSelector((state) => state.loader);
    return (
        <div style={{
            height:"2.8px"
        }}               
        >
            <div className={styles.loader}
        style={{
            display: loader ? "block" : "none",
        }}
        ></div> 
        </div>
    );
}

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className={styles.suspenseLoader}></div>
        </div>
    );
}
export {Loader, SmallLoader};