import React, {useState, useEffect} from 'react'
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Get } from "../../FetchFuctions"

const SearchBox = ({ searchRef }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const listRef = React.useRef(null);


  useEffect(() => {
    if (searchQuery.length > 0) {
      Get(0, `suggestions`, { query: searchQuery })
        .then((data) => {
          setSearchSuggestions(data.data);
          // console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchQuery]);


  const onKeyDownHandler = (e) => {
    searchQuery != ""
      ? navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`)
      : alert("Please enter a valid search query");
  };
  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setSelectedSuggestionIndex((prevIndex) =>
            prevIndex <= 0 ? searchSuggestions.length - 1 : prevIndex - 1
          );
          break;
        case 'ArrowDown':
          event.preventDefault();
          setSelectedSuggestionIndex((prevIndex) =>
            prevIndex === searchSuggestions.length - 1 ? 0 : prevIndex + 1
          );
          break;
        case 'Enter':
          if (selectedSuggestionIndex !== -1) {
            setSearchQuery(searchSuggestions[selectedSuggestionIndex]);
            setSearchSuggestions(false);
          }
          break;
        default:
          break;
      }
    }

    searchRef.current.addEventListener('keydown', handleKeyDown);
    return () => searchRef.current.removeEventListener('keydown', handleKeyDown);
  }, [selectedSuggestionIndex, searchSuggestions]);

  useEffect(() => {
    if (listRef.current && selectedSuggestionIndex !== -1) {
      listRef.current.children[selectedSuggestionIndex].scrollIntoView({
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [selectedSuggestionIndex]);

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    setSelectedSuggestionIndex(-1);
  };
  return (
    <>
      <form
              onSubmit={(e) => {
                e.preventDefault();
                onKeyDownHandler();
              }}
            >
              <div className="relative flex-row rounded-lg hidden sm:flex overflow-hidden">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={onChangeHandler}
                  id="default-search"
                  autoComplete="off"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      searchRef.current.blur();
                    }
                  }}
                  ref={searchRef}
                  className="search-box block w-full min-w-[320px] h-[40px] pl-4  text-sm text-gray-800  bg-slate-300  dark:bg-slate-700  outline-none 
         dark:placeholder-slate-400 dark:text-white  placeholder:text-gray-600"
                  placeholder="Get something to watch"
                />

                <button className="flex w-[68px] h-[40px] items-center justify-center bg-slate-400 dark:bg-slate-900  border-l-1 cursor-pointer">
                  <HiSearch
                    className=" text-neutral-800 dark:text-white "
                    size={24}
                  />
                </button>
              </div>
              <div className="suggestions absolute top-12  w-[330px] bg-slate-300 dark:bg-slate-700 rounded-md shadow-lg max-h-[328px] overflow-y-auto z-10 radius-2xl "
                ref={listRef}
              >
                {searchRef?.current == document.activeElement && searchSuggestions.map((suggestion) => (
                  <li key={suggestion}
                    className="p-2 hover:bg-slate-400 dark:hover:bg-slate-600 cursor-pointer l list-none"
                    style={{
                      backgroundColor: selectedSuggestionIndex === searchSuggestions.indexOf(suggestion) ? "#4f46e5" : "",
                    }}
                    onClick={() => {
                      setSearchQuery(suggestion)
                      navigate(`/results?search_query=${encodeURIComponent(suggestion)}`)
                    }}
                    tabIndex="0"
                  >{suggestion}</li>))}
              </div>
            </form>
    </>
  );
};

export default SearchBox;