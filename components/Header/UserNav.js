"use client";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import UserMenu from "./UserMenu";
import AuthForm from "../AuthForm/AuthForm";
import Overlay from "../Modal/Overlay";
export default function UserNav() {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const [toggleSignForm, setToggleSignForm] = useState(false);

  const UserMenuHandler = function () {
    setToggleUserMenu((prevState) => !prevState);
  };
  const signOpenHandler = () => {
    setToggleSignForm(true);
    setToggleUserMenu(false);
  };
  const signCloseHandler = () => {
    setToggleSignForm(false);
  };
  return (
    <>
      <div className="flex gap-1 items-center">
        <div className="relative">
          <button
            className="flex justify-center items-center border rounded-full max-w-xs px-3 h-11 shadow hover:shadow-md hover:cursor-pointer text-sm gap-2"
            onClick={UserMenuHandler}
          >
            <HiMenu size={20} />
            <FaUserCircle size={30} color="grey" />
          </button>
          {toggleUserMenu && <UserMenu onSign={signOpenHandler} />}
          {toggleSignForm && <AuthForm onClose={signCloseHandler} />}
          {toggleSignForm && <Overlay onClose={signCloseHandler} />}
        </div>
      </div>
    </>
  );
}
