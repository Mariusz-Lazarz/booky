export default function UserMenu() {
  return (
    <div className="bg-white border rounded mt-2 absolute w-48 right-0">
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
