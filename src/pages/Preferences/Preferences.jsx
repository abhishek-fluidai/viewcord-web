import Recat from "react";
import { useEffect, useRef, useState } from "react";
import {login } from "../../components/common/FetchFuctions"
import { setLocal,getLocal } from "../../components/utils/StorageUtils";

const Preferences = () => {
  return (
    <div>
      <h1
      className="text-5xl font-bold text-gray-700 dark:text-gray-200 text-center"
      >Preferences</h1>
      <br />

      <Login />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    const res = await login(username, password);
    if (res.token) {
        setLocal("token", res.token);
        setLocal("username", res.username);
        setLocal("isLogin", true);
    }
    };


  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-4 justify-center items-center">
       {!getLocal("isLogged") ? (
        <>
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          {/* You are logged in as {getLocal("username")} */}
        </h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={(e) => {
            setLocal("isLogged", false);
            setLocal("token", "");
        }}
        >
          Logout
        </button>    
      </>    
       ):( 
       <>
       <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          Login
        </h3>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
         onChange={handlePassword}   
          className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Password"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={(e) => {
            e.preventDefault();
            handleLogin()
        }}
        >
          Login
        </button>
        </>)}
      </div>
    </div>
  );
};

export default Preferences;
