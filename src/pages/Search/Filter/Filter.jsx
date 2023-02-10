const Filter = (props) => {
  const filters = [
    { name: "All", value: "all" },
    { name: "Videos", value: "videos" },
    { name: "Channels", value: "channels" },
    { name: "Playlists", value: "playlists" },
    { name: "Songs", value: "music_songs" },
    { name: "Music Videos", value: "music_videos" },
    { name: "Albums", value: "music_albums" },
    { name: "Music Playlists", value: "music_playlists" },
  ];
  return (
    <div className="flex flex-row gap-1 items-center">
     {
        filters.map((filter, index) => {
          return (
            <div
              className="px-3  rounded-md mx-1 cursor-pointer bg-transparent outline outline-[1.5px] select-none
              outline-slate-800 dark:outline-gray-200  dark:text-white font-sm flex items-center justify-center"
              key={index}
              style={{ color: props.filter === filter.value ? "#000" : "",
                backgroundColor: props.filter === filter.value ? "#fff" : ""
            }}
              onClick={() => props.setFilter(filter.value)}
            >
              {filter.name}
            </div>
          );
          })
     }
    </div>
  );
};


export default Filter;
