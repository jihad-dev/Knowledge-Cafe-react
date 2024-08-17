import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Knowledge Cafe
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              <img className="w-14 h-14" src={profile} alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
