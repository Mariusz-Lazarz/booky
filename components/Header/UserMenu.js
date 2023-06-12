export default function UserMenu() {
  return (
    <div className=" bg-white divide-y absolute mt-4 md:mt-2 border-b md:border md:rounded w-screen md:w-48 right-0 text-center md:text-left">
      <div className="flex flex-col">
        <a className="hover:cursor-pointer hover:bg-orange-50 p-2 ">Log in</a>
        <a className="hover:cursor-pointer hover:bg-orange-50 p-2 ">Sign up</a>
      </div>
      <div className="flex flex-col">
        <a className="hover:cursor-pointer hover:bg-orange-50 p-2 ">Airbnb</a>
        <a className="hover:cursor-pointer hover:bg-orange-50 p-2 ">Help</a>
      </div>
    </div>
  );
}
