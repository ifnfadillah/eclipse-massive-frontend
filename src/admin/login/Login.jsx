import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function Login() {
  return (
    <div className="flex flex-col items-center bg-gray-50 justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-dark-800">
        <img src="" className="mr-4 h-11" alt="Tolong buatin logo kak talitha & kak anita" />
      </a>
      <div className="w-full rounded-2xl shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-gray-50">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">Selamat Datang Admin!</h1>

          <form className="space-y-4 md:space-y-6" action="" method="post">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="bg-gray-50 border border-blue-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Masukkan Username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Kata Sandi
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan Kata Sandi"
                className="bg-gray-50 border border-blue-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <Button type="submit" name="login" className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center">
              Masuk
            </Button>
            <p className="text-sm font-light text-gray-500">
              <span className="text-sm sm:text-center">
                © 2024{" "}
                <a href="index.php" className="hover:underline">
                  Parentify
                </a>{" "}
              </span>
              All Rights Reserved.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
