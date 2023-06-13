"use client";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import UserMenu from "./UserMenu";
import AuthForm from "../AuthForm/AuthForm";
import Overlay from "../Modal/Overlay";
import LoginForm from "../AuthForm/LoginForm";
export default function UserNav() {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const [toggleSignForm, setToggleSignForm] = useState(false);
  const [toggleLoginForm, setToggleLoginForm] = useState(false);
  const [overLay, setOverlay] = useState(false);

  const UserMenuHandler = function () {
    setToggleUserMenu((prevState) => !prevState);
  };
  const signOpenHandler = () => {
    setToggleSignForm(true);
    setOverlay(true);
    setToggleUserMenu(false);
  };
  const loginOpenHandler = () => {
    setToggleLoginForm(true);
    setOverlay(true);
    setToggleUserMenu(false);
  };
  const signCloseHandler = () => {
    setToggleSignForm(false);
    setOverlay(false);
  };
  const loginCloseHandler = () => {
    setToggleLoginForm(false);
    setOverlay(false);
  };
  const turnOffOverlay = () => {
    setOverlay(false);
    setToggleSignForm(false);
    setToggleLoginForm(false);
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
          {toggleUserMenu && (
            <UserMenu onSign={signOpenHandler} onLogin={loginOpenHandler} />
          )}
          {toggleSignForm && <AuthForm onClose={signCloseHandler} />}
          {toggleLoginForm && <LoginForm onClose={loginCloseHandler} />}
          {overLay && <Overlay onClose={turnOffOverlay} />}
        </div>
      </div>
    </>
  );
}
