import { useState } from "react";
import { login, register, Post } from "../../components/common/FetchFuctions";
import { setLocal, getLocal } from "../../components/utils/StorageUtils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (username === "" || password === "") {
      return;
    }
    const res = await Post(0,"login", {
      username: username,
     password: password,
    });
    console.log(res);
    if (res.data.token) {
      setLocal("token", res.data.token);
      setLocal("username", username);
      window.location.reload();
    }
  };

  const handleRegister = async () => {
    if (username === "" || password === "") {
      return;
    }
    const res = await Post(0,"register", {
      username: username,
      password: password,
    });
    console.log(res);
    if (res.data.token) {
      setLocal("token", res.data.token);
      setLocal("username", username);
      window.location.reload();
    }
  };

  const handleDeleteAccount = async () => {
    if (getLocal("token") === "") {
      return;
    }
    const confirmation = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmation) {
      const res = await Post(1,"user/delete", {
        password: password,
      });
      console.log(res);
      setLocal("token", "");
      setLocal("username", "");
      alert(`Account ${res.data.username} deleted`);
      window.location.reload();
    }

  }      
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-4 ">
        {getLocal("token") ? (
          <>
          <div className="flex flex-col gap-4 p-8 sm:flex-row justify-between items-center w-full sm:p-4 bg-gray-100 dark:bg-gray-800/80 rounded-md  my-4">
            <span className="text-md font-normal text-gray-700 dark:text-green-400 px-4 py-[4px] ring-1 rounded-full ">
              Authenticated as 
              <span className="font-bold ml-[6px]">
              {getLocal("username")}
              </span>
            </span>

            <div className="flex gap-2 ">
              <button
                className="bg-red-400/80 text-white px-4 py-[5px] rounded-full"
                onClick={(e) => {
                  setIsDeleteAccountOpen(true);
                }}
              >
                Delete Account
              </button>

              <button
                className="bg-slate-600 text-white px-4 py-[5px] rounded-full"
                onClick={(e) => {
                  setLocal("token", "");
                  setLocal("username", "");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          </div>
            <div
            className="flex flex-col gap-4 justify-between items-center w-[328px] m-auto my-2  py-14 bg-gray-100 dark:bg-gray-800/80 rounded-lg"
            style={{
              minHeight: "300px",
              display: isDeleteAccountOpen ? "flex" : "none",
            }}
          >
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              className="border-2 border-gray-300 p-2 py-[5px] rounded-lg dark:text-white dark:bg-slate-600 focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
            <div className="flex flex-row gap-2 justify-between items-center mt-4">
              <button
                className="bg-slate-600 text-white px-6 py-[7px] rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteAccount();
                }}
              >
                Delete Account
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                or
              </span>
              <button
                className="bg-slate-600 text-white px-6 py-[7px] rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}
              >
                Register
              </button>
            </div>
          </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 p-8 sm:flex-row justify-between items-center w-full sm:p-4 bg-gray-100 dark:bg-gray-800/80 rounded-md  my-4">
              <span className="text-md font-normal text-gray-700 dark:text-red-400 px-4 py-[4px] ring-1 rounded-full ">
                Unauthenticated
              </span>
              <button
                className="bg-slate-600 text-white px-4 py-[5px] rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginOpen((prev) => !prev);
                }}
              >
                Login
              </button>
            </div>
            <div
              className="flex flex-col gap-4 justify-between items-center w-[328px] m-auto my-2  py-14 bg-gray-100 dark:bg-gray-800/80 rounded-lg"
              style={{
                minHeight: "300px",
                display: isLoginOpen ? "flex" : "none",
              }}
            >
              <input
                type="text"
                value={username}
                onChange={handleUsername}
                className="border-2 border-gray-300 p-2 dark:bg-slate-600 dark:text-white py-[5px] rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Username"
              />
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                className="border-2 border-gray-300 p-2 py-[5px] rounded-lg dark:text-white dark:bg-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
              <div className="flex flex-row gap-2 justify-between items-center mt-4">
                <button
                  className="bg-slate-600 text-white px-6 py-[7px] rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  Login
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  or
                </span>
                <button
                  className="bg-slate-600 text-white px-6 py-[7px] rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
