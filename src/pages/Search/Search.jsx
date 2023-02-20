import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResults, getNextPageSearchResults } from "../../components/common/FetchFuctions";
import { SideBarVideoCard } from "../../components/utils/ContentCards/VideoCard/VideoCard";
import { ChannelCard } from "../../components/utils/ContentCards/ChannelCard/ChannelCard";
import PlaylistCard from "../../components/utils/ContentCards/PlaylistCard/PlaylistCard";
import Filter from "./Filter/Filter";
import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [containerHeight, setContainerHeight] = useState(
    window.innerHeight - 66
  );
  // const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const searchQuery = searchParams.get("search_query");
    if (!searchQuery || searchQuery === "") {
      alert("Please enter a search query");
      return;
    }
    setLoading(true);
    getSearchResults(searchQuery, filter).then((res) => {
      setResults(res.items);
      setNextPageToken(res.nextpage);
      setLoading(false);
    });

    function handleResize() {
      setContainerHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [searchParams.get("search_query"), filter]);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  function handleScroll() {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      FetchMoreResults();
    }
  }

  const FetchMoreResults = async () => {
    const searchQuery = searchParams.get("search_query");
    if (!searchQuery || searchQuery === "" || results.length === 0 ) {
      return
    }
    if (nextPageToken === null) {
      return;
    }
    setLoadingMore(true);
    const res = await getNextPageSearchResults(searchQuery,filter,encodeURIComponent(nextPageToken))
    if (res?.items?.length > 0) {
      setResults((prev) => [...prev, ...res?.items]);
      setNextPageToken(res?.nextpage);
     } else {
      setNextPageToken(null);
     }
     setLoadingMore(false);
  }
  return (
    <div className="overflow-hidden">
      <div
        className="flex flex-col md:px-8 lg:md-12 w-full overflow-y-scroll h-full"
        ref={containerRef}
        style={{ height: containerHeight }}
        onScroll={handleScroll}
      >
        <div className="flex flex-col w-full filter p-4 ">
          <Filter setFilter={changeFilter} filter={filter} />
        </div>
        {loading && (
          <div className={styles.loader_container}>
            <span className={styles.loader}></span>
          </div>
        )}
        {!loading && (
          <div className="flex flex-col w-full results">
            {results != [] ? (
              results.map((result, index) => {
                switch (result.type) {
                  case "stream":
                    return (
                      <div className="flex flex-col w-full result" key={index}>
                        <SideBarVideoCard {...result} isSearch={true} />
                      </div>
                    );
                  case "channel":
                    return (
                      <div className="flex flex-col w-full result" key={index}>
                        <ChannelCard {...result} />
                      </div>
                    );
                  case "playlist":
                    return (
                      <div className="flex flex-col w-full result" key={index}>
                        <PlaylistCard {...result} isSearch={true} />
                      </div>
                    );
                }
              })
            ) : (
              <div className="flex flex-col w-full result">
                No results found
              </div>
            )}
          </div>
        )}
         {loadingMore && !loading  &&(
          <div className={styles.loader_container}>
            <span className={styles.loader}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
