import React, { Children } from "react";

const Select = ({ label, onChange, children  }) => {
   
    return (
        <div className="flex p-2 justify-between items-center w-full h-full">
        <label
            className="block text-lg font-medium text-gray-700 dark:text-white/80"
            htmlFor="quality"
        >
            {label} :
        </label>
       <select className="w-1/2 lg:w-1/4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2 cursor-pointer" 
            onChange={onChange}
        >
            {children}
        </select>
        </div>
    );
}

export default Select;