"use client";
import { GrFormClose } from "react-icons/gr";
import Input from "../UI/Input";
import Button from "../UI/Button";
export default function LoginForm(porps) {
  return (
    <>
      <div className="bg-white p-10 rounded-lg divide-y-2 fixed right-2/4 top-1/4 translate-x-2/4 w-12/12 md:w-6/12 xl:w-3/12 z-20">
        <div className="flex justify-between items-center mb-4">
          <GrFormClose
            size={25}
            className="hover:cursor-pointer hover:bg-orange-50 rounded-full"
            onClick={porps.onClose}
          />
          <h1 className="font-bold">Login</h1>
          <div></div>
        </div>
        <div>
          <h1 className="mb-5 mt-5">Welcome to Booky</h1>
          <form className="flex flex-col justify-center content-center">
            <Input
              id="email"
              type="text"
              for="email"
              placeholder="Email..."
            ></Input>
            <Input
              id="password"
              type="text"
              for="password"
              placeholder="Password..."
            ></Input>
            <Button type="submit" text="Login" />
          </form>
        </div>
      </div>
    </>
  );
}
