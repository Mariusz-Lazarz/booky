import { FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <>
      <div class="flex items-center border rounded-full max-w-xs pl-4 pr-2 h-11 shadow hover:shadow-md hover:cursor-pointer text-sm gap-2">
        <div>Anywhere</div>
        <div class="hidden md:block">Any week</div>
        <div>Add guests</div>
        <div class="bg-red-500 p-2 rounded-full">
          <FaSearch color="white" size={12} />
        </div>
      </div>
    </>
  );
}
