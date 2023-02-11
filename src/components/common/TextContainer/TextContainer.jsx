import React, { useState } from 'react';
import { useEffect } from 'react';
import {IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ShowMoreText = ({ text, limit }) => {
  const [expanded, setExpanded] = useState(false);


  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="rounded-lg  w-[calc(100% - 48px)] h-22 bg-slate-500 p-4 shadow-xl relative pr-8 max-w-[960px] 
    
    m-auto">
       <style jsx>{`
        a {
          color: #fff;
          text-decoration: underline;
          font-weight: 600;
          opacity: 0.8;
        }
      `}</style>
         {text.length > limit && (
        <button onClick={handleClick} className=" block text-slate-400 mt-2 absolute right-6 top-2 ">
          {<IoIosArrowDown  size="32px" className="text-white transition-all" style={{transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'}} /> }
        </button>
        // render text as html 
        
      )}
      {expanded ? (<span dangerouslySetInnerHTML={{__html: text}}></span>) : text.slice(0, limit)}

     
    </div>
  );
};

export default ShowMoreText;