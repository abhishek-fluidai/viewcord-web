import React from 'react';

const Dialog = ({ title, children, open, onClose }) => {
    return (

<div id="crypto-modal" tabIndex="-1" aria-hidden="true" className="fixed top-1/2 left-10 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
style={{
    display: open ? "block" : "none",
}}
>
    <div className="relative w-full h-full max-w-md md:h-auto"
        style={{ top: "50%",left: "50%", transform: "translate(-50%,-50%)" }}
    >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" 
            onClick={onClose}
            >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    {title || "Title"}
                </h3>
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    </div>
</div>

)
    }

export default Dialog
