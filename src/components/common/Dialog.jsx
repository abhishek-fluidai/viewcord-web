import React, { useState, useEffect, useRef } from 'react';

const Dialog = ({ isOpen,title, onClose, children,width,height }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const dialogRef = useRef(null);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center  bg-opacity-50 z-50 ">
          <div ref={dialogRef} className="dark:bg-gray-700 rounded-lg p-4 shadow-lg  outline-1 outline-slate-900"
            style={{width: width || "360px",
                height: height || "auto",
            }}
          >
          <div className="px-3 py-2 border-b rounded-t dark:border-gray-600  flex items items-center">
                 <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    {title || "Dialog"}
                 </h3>
             <button type="button" className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" 
            onClick={handleClose}
            >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                <span className="sr-only">Close modal</span>
            </button>
            </div>
            <div className="p-4">
           
            {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default Dialog
