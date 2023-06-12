import Logo from "./Logo";
import Search from "./Search";
import UserNav from "./UserNav";

export default function Nav() {
  return (
    <nav className=" flex justify-between items-center px-1 md:px-20 py-3 border-b relative">
      <Logo></Logo>
      <Search></Search>
      <UserNav></UserNav>
      {/* <div className="absolute top-20 right-20 border rounded flex flex-col w-48 bg-white p-2 text-lg">
        <div className="flex flex-col">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
        <div className="flex flex-col">
          <button>Airbnb your home</button>
          <button>Help</button>
        </div>
      </div> */}
    </nav>
  );
}
