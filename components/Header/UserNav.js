import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
export default function UserNav() {
  return (
    <>
      <div class="flex gap-1 items-center">
        <div class="p-3 rounded-full hover:bg-slate-100 text-sm hidden lg:block">
          <p>Airbnb your home</p>
        </div>
        <div class="p-3.5 rounded-full hover:bg-slate-100">
          <TfiWorld />
        </div>
        <div class="flex justify-center items-center border rounded-full max-w-xs px-2 h-11 shadow hover:shadow-md hover:cursor-pointer text-sm gap-2">
          <HiMenu size={20} />
          <FaUserCircle size={30} color="grey" />
        </div>
      </div>
    </>
  );
}
