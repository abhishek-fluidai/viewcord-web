import MetaHelmet from "../../components/common/MetaHelmet";
import Login from "./Login";
import Select from "../../components/common/Select";
import CountryMap from "../../components/common/CountryMap.json";
import { setLocal, getLocal } from "../../components/utils/StorageUtils";
import Instance from "./Instance";

const Preferences = () => {
  return (
    <>
      <MetaHelmet title="Preferences" />
      <div className="w-full h-full flex flex-col justify-start px-4 py-2 items-start">
        <div className="w-full  flex flex-col justify-start items-center  border-b-[1px] border-gray-200 dark:border-gray-700/80 py-4">
          <h1 className="text-5xl font-bold text-gray-800 text-center w-full md:text-left py-2 pb-4 dark:text-white/80">
            Preferences
          </h1>
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <Login />

          {/* country section */}
          <Select label="Country">
            {CountryMap.map((option) => (
              <option
                key={option.code}
                value={option.code}
                selected={
                  getLocal("country") == option.code
                    ? true
                    : getLocal("country") === null && option.code == "IN"
                    ? true
                    : false
                }
                onClick={() => {
                  setLocal("country", option.code);
                }}
              >
                {option.name}
              </option>
            ))}
          </Select>

          {/* Quality section */}
          <Select label="Quality">
            {[144, 240, 360, 480, 720, 1080, 1440, 2160, 4320].map((res) => (
              <option
                key={res}
                selected={
                  getLocal("quality") == res
                    ? true
                    : getLocal("quality") === null && res == 360
                    ? true
                    : false
                }
                onClick={() => {
                  setLocal("quality", res);
                }}
                onKeyDown={(e) => console.log(e)}
              >
                {res}p
              </option>
            ))}
          </Select>

          {/* Instance selection */}
          <Instance />

        </div>
      </div>
    </>
  );
};

export default Preferences;
