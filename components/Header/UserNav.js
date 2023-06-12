"use client";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import UserMenu from "./UserMenu";
export default function UserNav() {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  const UserMenuHandler = function () {
    setToggleUserMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex gap-1 items-center">
        <div className="p-3 rounded-full hover:bg-orange-50 text-sm hidden lg:block">
          <p>Airbnb your home</p>
        </div>
        <div className="p-3.5 rounded-full hover:bg-orange-50">
          <TfiWorld />
        </div>
        <div className="relative">
          <button
            className="flex justify-center items-center border rounded-full max-w-xs px-3 h-11 shadow hover:shadow-md hover:cursor-pointer text-sm gap-2"
            onClick={UserMenuHandler}
          >
            <HiMenu size={20} />
            <FaUserCircle size={30} color="grey" />
          </button>
          {toggleUserMenu && <UserMenu />}
        </div>
      </div>
    </>
  );
}
