"use client";
import login from "@/lib/login";
import { SetTokenToCookie } from "@/utilities/CookieOperation";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUserName: "",
    password: "",
  });
  const [isFailed, setIsFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await login(formData);

    console.log("response.ok: ", response.ok);

    if (response.ok) {
      response = await response.json();
      const token = response.access_token;
      await SetTokenToCookie(token, "lt");
      console.log("response: ", response);
      setIsFailed(false);
      setErrorMessage("");
      window.location.href = "/dashboard";
    } else {
      setIsFailed(true);
      setErrorMessage("Email Or Password not matched");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Or User Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="dew.fog1553@gmail.com"
                  required=""
                  value={formData.emailOrUserName}
                  onChange={(e) => {
                    handleChange("emailOrUserName", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={formData.password}
                  onChange={(e) => {
                    handleChange("password", e.target.value);
                  }}
                />
              </div>
              {isFailed ? (
                <div className="text-center text-red-600 font-extrabold p-0 m-0">
                  {errorMessage}
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign In
              </button>
            </form>
            <hr />
            <div className="text-center">
              <Link
                href="/registration"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
