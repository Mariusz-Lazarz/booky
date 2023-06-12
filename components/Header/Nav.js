import Logo from "./Logo";
import Search from "./Search";
import UserNav from "./UserNav";

export default function Nav() {
  return (
    <nav className=" flex justify-between items-center px-1 md:px-20 py-3 border-b relative">
      <Logo></Logo>
      <Search></Search>
      <UserNav></UserNav>
    </nav>
  );
}
