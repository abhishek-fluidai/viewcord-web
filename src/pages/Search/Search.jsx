import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResults } from "../../components/common/FetchFuctions";
import { SideBarVideoCard } from "../../components/utils/ContentCards/VideoCard/VideoCard";
import ChannelCard from "../../components/utils/ContentCards/ChannelCard/ChannelCard";
import PlaylistCard from "../../components/utils/ContentCards/PlaylistCard/PlaylistCard";
import Filter from "./Filter/Filter";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchQuery = searchParams.get("search_query");
    if (!searchQuery) {
      return;
    }
    getSearchResults(searchQuery, filter).then((res) => {
      setResults(res.items);
      console.log(res);
    });
  }, [searchParams.get("search_query"), filter]);

  const changeFilter = (filter) => {
    setFilter(filter);
    console.log(filter);
  };

  return (
    <div className="flex ">
      <div className="flex flex-col w-full max-w-[1024px] mx-[auto]">
        <div className="flex flex-col w-full filter p-4">
          <Filter setFilter={changeFilter} />
        </div>
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
                      <PlaylistCard {...result} />
                    </div>
                  );
              }
            })
          ) : (
            <div className="flex flex-col w-full result">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
