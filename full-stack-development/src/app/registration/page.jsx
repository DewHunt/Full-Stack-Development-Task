"use client";
import saveEmployee from "@/lib/registration";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [isFailed, setIsFailed] = useState(true);
  const [isPasswordMatched, setIsPasswordMatched] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmPaasword = (value) => {
    if (formData.password === value) {
      setIsPasswordMatched(true);
    } else {
      setIsPasswordMatched(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await saveEmployee(formData);

    console.log("response.ok: ", response.ok);

    if (response.ok) {
      response = await response.json();
      console.log("response: ", response);
      setIsFailed(response.status);
      if (response.status) {
        // handleChange("name", "");
        // handleChange("userName", "");
        // handleChange("email", "");
        // handleChange("password", "");
        setFormData({
          name: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setSuccessMessage(response.message);
        // window.location.href = "/login";
      } else {
        setErrorMessage(response.message);
      }
    } else {
      setIsFailed(true);
      setErrorMessage("Something Wrong! Save Unsuccessful");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dew Hunt"
                  required=""
                  value={formData.name}
                  onChange={(e) => {
                    handleChange("name", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  User Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="dew"
                  required=""
                  value={formData.userName}
                  onChange={(e) => {
                    handleChange("userName", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="dew.fog1553@gmail.com"
                  required=""
                  value={formData.email}
                  onChange={(e) => {
                    handleChange("email", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={formData.password}
                  onChange={(e) => {
                    handleChange("password", e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => {
                    handleConfirmPaasword(e.target.value);
                  }}
                />
                {isPasswordMatched === false ? (
                  <p className="text-center text-red-600 font-extrabold p-0 m-0">
                    Password not matched.
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                {isFailed ? (
                  <p className="text-center text-green-600 font-extrabold p-0 m-0">
                    {successMessage}
                  </p>
                ) : (
                  <p className="text-center text-red-600 font-extrabold p-0 m-0">
                    {errorMessage}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Create an account
              </button>
            </form>
            <hr />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-green-600 hover:underline dark:text-green-500">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
