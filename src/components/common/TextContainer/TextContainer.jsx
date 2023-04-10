import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ShowMoreText = ({ text, limit }) => {
  const [expanded, setExpanded] = useState(false);
  const [formattedText, setFormattedText] = useState("");

  const handleClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    if (!isHTML(text)) {
      setFormattedText(detectLinks(text));
      return;
  }
    let inter_text = document.createElement("div");
      inter_text.innerHTML = text;
      for (let el of inter_text.querySelectorAll("script, style")) {
        el.remove();
      }
      inter_text = inter_text.innerHTML;
      setFormattedText(inter_text);

  }, [text, limit]);

  function isHTML(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    return doc.body.childElementCount > 0;
  }
  function detectLinks(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank">${url}</a>`;
    });
  }

  return (
    <div
      className="rounded-lg  w-[calc(100% - 16px)] h-22 bg-slate-500 p-4 shadow-xl relative  m-auto hover:shadow-2xl transition-all duration-300 ease-in-out  pr-[50px]"
      onClick={() => setExpanded(true)}
    >
      <style jsx>{`
        a {
          color: #fff;
          font-weight: 600;
          opacity: 0.9;
        }
        a:hover {
          text-decoration: underline;
          opacity: 1;
        }
      `}</style>
      {text.length > limit && (
        <button className=" block text-slate-400 mt-2 absolute right-6 top-2 "
                onClick={handleClick}
        >
          {
            <IoIosArrowDown
              size="32px"
              className="text-white transition-all"
              style={{
                transformOrigin: "center",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          }
        </button>
      )}
      {expanded ? (
        <span dangerouslySetInnerHTML={{ __html: formattedText }}></span>
      ) : (
        <span
          className="overflow-hidden overflow-ellipsis "
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {formattedText?.slice(0, limit)}
        </span>
      )}
    </div>
  );
};

export default ShowMoreText;
