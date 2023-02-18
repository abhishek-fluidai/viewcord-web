import MetaHelmet from "../../components/common/MetaHelmet";
import { getLocal } from "../../components/utils/StorageUtils";
import Login from "./Login";

const Preferences = () => {
  return (
    <>
  <MetaHelmet title="Preferences" />
    <div 
    className="w-full h-full flex flex-col justify-start px-4 py-2 items-start"
    >
      <div
      className="w-full  flex flex-col justify-start items-center  border-b-[1px] border-gray-200 dark:border-gray-700/80 py-4"
      >
      <h1
      className="text-5xl font-bold text-gray-800 text-center w-full md:text-left py-2 pb-4 dark:text-white/80"
      >Preferences</h1>
    
      </div>
      <div className="flex flex-col gap-4 w-full my-2">
      <Login />
      </div>
    </div>
    </>
  );
};

export default Preferences;
